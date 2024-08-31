import request from "supertest";
import { getTokenUser } from "../../../helpers/get-token";
import { testServer } from '../../../test-server';

import { FormacionEntity } from "../../../../src/domain/entities";

import { 
    updateFormacionesTest, 
    updateFormacionTest, 
    deleteFormacion, 
    getCourseTest, 
    getFormacionTest 
} from "./helpers";


describe('Pruebas a [routes.ts] para formación', () => {  

    let token           : string;
    let id_course       : number;
    let id_formacion    : number;
    let test_formacion  : FormacionEntity;

    beforeAll(async() => {
        await testServer.start();
        token           = await getTokenUser( testServer );
        id_course       = await getCourseTest();
        id_formacion    = await getFormacionTest();
    });

    afterAll(async() => {
        await deleteFormacion( test_formacion.id_formacion );
        testServer.close();
    });

    test('Debe borrar todas las formaciones para un curso - endpoint: [/api/formacion/deleteAll/:id]', async() => { 

        const { body } = await request( testServer.app )
            .delete( `/api/formacion/deleteAll/${ id_course }` )
            .set( 'token-auth', token )
            .expect( 200 );

        expect( body ).toEqual({ status: 'success', data: 'Formaciones eliminadas del curso' });

        await updateFormacionesTest( id_course );

    });

    test('Debe borrar una formación para un curso - endpoint: [/api/formacion/delete/:id]', async() => {  

        const { body } = await request( testServer.app )
            .delete( `/api/formacion/delete/${ id_formacion }` )
            .set( 'token-auth', token )

        expect( body ).toEqual({ status: 'success', data: 'Formación borrada del curso' });

        await updateFormacionTest( id_formacion );

    });

    test('Debe crear una formación para un curso - endpoint: [/api/formacion/create]', async() => {  

        const { body } = await  request( testServer.app )
            .post('/api/formacion/create')
            .set( 'token-auth', token )
            .send([ { contenido: 'Formación X - TCX', id_curso: id_course } ])
            .expect( 200 );

        expect( body ).toEqual({
            status: 'success',
            data: {
                formaciones: expect.any( Array ),
            }
        });

        expect( body['data']['formaciones'].length ).toBe( 1 );

        test_formacion = body['data']['formaciones'][0]

    });

    test('Debe actualizar los datos de una formación - endpoint: [/api/formacion/update/:id]', async() => { 

        const updateContenido = 'Formación X modificada';

        const { body } = await request( testServer.app )
            .put( `/api/formacion/update/${ test_formacion.id_formacion }` )
            .set( 'token-auth', token )
            .send({ contenido: updateContenido })
            .expect( 200 );

        expect( body ).toEqual({
            status: 'success',
            data: {
                formacion: expect.objectContaining({
                    contenido: updateContenido,
                }),
            },
        });
        
    });

});

describe('Pruebas de errores a [routes.ts] para formación', () => {  

    let token: string;

    beforeAll(async() => {
        await testServer.start();
        token = await getTokenUser( testServer );
    });

    afterAll(async() => {
        testServer.close();
    });

    test('Debe mostrar un error 400 si falta una propiedad para crear una formación - endpoint: [/api/formacion/create]', async() => {  

        const { body } = await request( testServer.app )
            .post( '/api/formacion/create' )
            .set( 'token-auth', token )
            .send([{ id_curso: 0 }])
            .expect( 400 );

        expect( body ).toEqual( { status: 'failed', error: '[ contenido ] es obligatoria' } );

    });

    test('Debe mostrar un error 500 si no se encuentra la formación - endpoints: [delete y update]', async() => { 

        const id_formacion = 1000;
        const format_error = { status: 'failed', error: 'No se encontró formación' };

        const responseFormacionDelete = await request( testServer.app )
            .delete( `/api/formacion/delete/${ id_formacion }` )
            .set( 'token-auth', token )
            .expect( 500 );

        const responseFormacionUpdate = await request( testServer.app )
            .put( `/api/formacion/update/${ id_formacion }` )
            .set( 'token-auth', token )
            .send({ contenido: 'Cambio prueba' })
            .expect( 500 );

        expect( responseFormacionDelete['body'] ).toEqual( format_error );
        expect( responseFormacionUpdate['body'] ).toEqual( format_error );

    });

    test('Debe mostrar un error 500 si no encuentra las formaciones de un curso - endpoint: [/api/formacion/deleteAll/:id]', async() => { 

        const id_curso = 1000;

        const { body } = await request( testServer.app )
            .delete( `/api/formacion/deleteAll/${ id_curso }` )
            .set( 'token-auth', token )
            .expect( 500 );

        expect( body ).toEqual( { status: 'failed', error: 'Formaciones no encontradas del curso' } );

    });

});