import request from 'supertest';

import { getCourseTest } from '../../../helpers/get-course';
import { getTokenUser } from '../../../helpers/get-token';
import { testServer } from '../../../test-server';

import { SeccionEntity } from '../../../../src/domain/entities';

import { 
    getSeccionTest, 
    updateSeccionesCurso, 
    updateSeccion,
    deleteSeccionTest, 
} from './helpers';

describe('Pruebas a [routes.ts] para sección', () => { 

    let token       : string;
    let id_curso    : number;
    let id_seccion  : number;
    let test_seccion: SeccionEntity;

    beforeAll(async() => {
        await testServer.start();
        token       = await getTokenUser( testServer );
        id_curso    = await getCourseTest();
        id_seccion  = await getSeccionTest();
    });

    afterAll(async() => {
        await deleteSeccionTest( test_seccion.id_seccion );
        testServer.close();
    });

    test('Debe eliminar todas las secciones de un curso - endpoint: [/api/seccion/deleteAll/:id]', async() => { 

        const { body } = await request( testServer.app )
            .delete( `/api/seccion/deleteAll/${ id_curso }` )
            .set( 'token-auth', token )
            .expect( 200 );
            
        expect( body ).toEqual( { status: 'success', data: 'Secciones eliminadas' } );

        await updateSeccionesCurso( id_curso );

    });

    test('Debe eliminar una sección de un curso - endpoint: [/api/seccion/delete/:id]', async() => {

        const { body } = await request( testServer.app )
            .delete( `/api/seccion/delete/${ id_seccion }` )
            .set( 'token-auth', token )
            .expect( 200 );

        expect( body ).toEqual( { status: 'success', data: 'Sección eliminada' } );

        await updateSeccion( id_seccion );

    });

    test('Debe crear una sección - endpoint: [/api/seccion/create]', async() => {  

        const { body } = await request( testServer.app )
            .post( '/api/seccion/create' )
            .set( 'token-auth', token )
            .send({ id_curso, titulo: 'Seccion de prueba', total_tiempo: '45' })
            .expect( 200 );

        expect( body ).toEqual({
            status: 'success',
            data: {
                seccion: {
                    id_curso    : expect.any( Number ),
                    titulo      : 'Seccion de prueba',
                    total_tiempo: '45',
                    id_seccion  : expect.any( Number ),
                  },
            },
        });

        test_seccion = body['data']['seccion'];

    });

    test('Debe actualizar los datos de una sección - endpoint: [/api/seccion/update/:id]', async() => { 

        const { body } = await request( testServer.app )
            .put( `/api/seccion/update/${ test_seccion.id_seccion }` )
            .set( 'token-auth', token )
            .send({ titulo: 'Seccion de prueba modificado', total_tiempo: '100' });

            expect( body ).toEqual({
                status: 'success',
                data: {
                    seccion: expect.objectContaining({
                        titulo      : 'Seccion de prueba modificado',
                        total_tiempo: '100',
                    }),
                },
            });

    });

});

describe('Pruebas de error a [routes.ts] para sección', () => { 

    let token: string;

    beforeAll(async() => {
        await testServer.start();
        token = await getTokenUser( testServer );
    });

    afterAll(async() => {
        testServer.close();
    });

    test('Debe mostrar un error 400 si falta una propiedad para crear una sección - endpoint: [/api/seccion/create]', async() => { 

        const { body } = await request( testServer.app )
            .post( '/api/seccion/create' )
            .set( 'token-auth', token )
            .send({ id_curso: 1, titulo: 'Prueba' })
            .expect( 400 );

        expect( body ).toEqual({ status: 'failed', error: '[ total_tiempo ] es obligatoria' });

    });

});