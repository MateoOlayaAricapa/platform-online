import request from "supertest";
import { testServer } from '../../../test-server';
import { CursoEntity } from "../../../../src/domain/entities";

import { courseResponseGet, courseResponsePut } from "./fixtures/course";
import { getCourseTest, updateCourseTest } from './helpers';
import { getTokenUser } from "../../../helpers/get-token";

describe('Pruebas a [routes.ts] para course', () => {
    
    let token   : string;
    let course  : CursoEntity;

    beforeAll(async() => {
        await testServer.start();
        token   = await getTokenUser( testServer );
        course  = await getCourseTest();
    });

    afterAll(async() => {
        await updateCourseTest( course );
        testServer.close();
    });

    test('Debe traer los cursos de un usuario con rol instructor - endpoint: [/api/curso/getAll/:type]', async() => { 

        const { body } = await request( testServer.app )
            .get(`/api/curso/getAll/${ 'instructor' }`)
            .set( 'token-auth', token )
            .expect( 200 );

        expect( body ).toEqual({
            status  : 'success',
            data    : expect.any( Array ),
        });

        expect( body['data'].length ).toBe(3);

    });

    test('Debe traer los cursos de un usuario con rol estudiante - endpoint: [/api/curso/getAll/:type]', async() => {  

        const { body } = await request( testServer.app )
            .get(`/api/curso/getAll/${ 'estudiante' }`)
            .set( 'token-auth', token )
            .expect( 200 );

        expect( body ).toEqual({
            status  : 'success',
            data    : expect.any( Array ),
        });

        expect( body['data'].length ).toBe(0);

    });

    test('Debe traer la información completa de un curso - endpoint: [/api/curso/get/:id]', async() => {  

        const { body } = await request( testServer.app )
            .get( `/api/curso/get/${ course.id_curso }` )
            .set( 'token-auth', token )
            .expect( 200 );
        
        expect( body ).toEqual({
            status  : 'success',
            data    : courseResponseGet,
        });

    });

    test('Debe mostrar un error [500] si no hay datos a actualizar - endpoint: [/api/curso/update/:id]', async() => {  

        const { body } = await request( testServer.app )
            .put( `/api/curso/update/${ course.id_curso }` )
            .set( 'token-auth', token )
            .send( {} )
            .expect( 500 );

        expect( body ).toEqual( { status: 'failed', error: 'Error: No hay datos a actualizar' } );

    });

    test('Deber mostrar error [500] si no encuentra el curso por id en los endpoints: [delete, getById y update]', async() => {  

        const idNotExist = 2220;
        const error      = 500;
        const bodyError  = { status: 'failed', error: 'Curso no encontrado' };

        const requestGetById = await request( testServer.app )
            .get( `/api/curso/get/${ idNotExist }` )
            .set( 'token-auth', token )
            .expect( error );

        expect( requestGetById.body ).toEqual( bodyError );

        const requestDeleteById = await request( testServer.app )
            .delete( `/api/curso/delete/${ idNotExist }` )
            .set( 'token-auth', token )
            .expect( error );

        expect( requestDeleteById.body ).toEqual( bodyError );

        const requestUpdateById = await request( testServer.app )
            .put( `/api/curso/update/${ idNotExist }` )
            .set( 'token-auth', token )
            .send({ titulo: 'Titulo curso 1.1' })
            .expect( error );

        expect( requestUpdateById.body ).toEqual( bodyError );

    });

    test('Debe actualizar los datos de un curso - endpoint: [/api/curso/update/:id]', async() => { 

        const { body } = await request( testServer.app )
            .put( `/api/curso/update/${ course.id_curso }` )
            .set( 'token-auth', token )
            .send( courseResponsePut )
            .expect( 200 );

        expect( body ).toEqual({
            status: "success",
            data: {
                curso: expect.objectContaining({ ...courseResponsePut }),
            }
        });

    });

    test('Debería eliminar un curso - endpoint: [/api/curso/delete/:id]', async() => { 

        const { body } = await request( testServer.app )
            .delete( `/api/curso/delete/${ course.id_curso }` )
            .set( 'token-auth', token )
            .expect( 200 );

        expect( body ).toEqual({ status: 'success', data: { status: 'Curso eliminado' } });

    });

});