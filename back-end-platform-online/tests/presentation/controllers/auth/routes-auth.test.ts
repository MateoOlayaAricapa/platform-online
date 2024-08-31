import request from 'supertest';
import { testServer } from '../../../test-server';
import { UserTest } from './helpers/user-test';
import { 
    userLoginRequest, 
    unregisteredUser, 
    userLoginResponse, 
    userLoginWithoutEmail, 
    registerUserRequestPost, 
    registerUserResponsePost,
    userTest,
    userTestUpdate,
    userTestLogin,
    userTestResponseUpdate,
} from './fixtures/user-auth';

describe('Pruebas a [routes.ts] para auth', () => {  

    const apiAuthGet    = '/api/auth/login';
    const apiAuthPost   = '/api/auth/register';
    const apiAuthPut    = '/api/auth/update';
    const apiAuthDelete = '/api/auth/delete';

    beforeAll(async() => {
        await testServer.start();
        await UserTest.create( userTest );
        await UserTest.delete( registerUserRequestPost );
    });
    
    afterAll(async() => {
        await UserTest.delete( registerUserRequestPost );
        await UserTest.delete( userTest );
        await testServer.close();
    });

    test('Debe regresar un usuario - endpoint: [api/auth/login]', async() => {  

        const { body } = await request( testServer.app )
            .get( apiAuthGet )
            .send( userLoginRequest )
            .expect( 200 );

        expect( body ).toEqual({
            status: 'success',      
            data: {
              user: { ...userLoginResponse },
              token: expect.any( String ),
            }
        });

    });

    test('Debe regresar un error 500 usuario no encontrado - endpoint: [api/auth/login]', async() => {

        const { body } = await request( testServer.app )
            .get( apiAuthGet )
            .send( unregisteredUser )
            .expect( 500 );

        expect( body ).toEqual({
            status: 'failed',      
            error: 'Correo o contraseña incorrecto'
        });

    });

    test('Debe regresar un error 400 - endpoint: [api/auth/login]', async() => {  

        const { body } = await request( testServer.app )
            .get( apiAuthGet )
            .send( userLoginWithoutEmail )
            .expect( 400 );

        expect( body ).toEqual({
            status: 'failed',
            error: 'El atributo [email] está vacío',
        });

    });

    test('Debe registrar un usuario - endpoint: [api/auth/register]', async() => {  

        const { body } = await request( testServer.app )
            .post( apiAuthPost )
            .send( registerUserRequestPost )
            .expect( 200 );

        expect( body ).toEqual({
            status: 'success',       
            data: {
              user: { ...registerUserResponsePost },
              token: expect.any( String ),
            }
        });

    });

    test('Debe actualizar datos de un usuario - endpoint: [api/auth/update]', async() => {  

        const responseLogin = await request( testServer.app )
            .get( apiAuthGet )
            .send( userTestLogin )
            .expect( 200 );

        const { body } = await request( testServer.app )
            .put( apiAuthPut )
            .set( 'token-auth', responseLogin['body']['data']['token'] )
            .send( userTestUpdate )
            .expect( 200 );

        expect( body ).toEqual({
            status: 'success',
            data: {
              user: { ...userTestResponseUpdate }
            }
        });

    });

    test('Debe eliminar un usuario - endpoint: [api/auth/delete]', async() => {  

        const responseLogin = await request( testServer.app )
            .get( apiAuthGet )
            .send( userTestLogin )
            .expect( 200 );

        const { body } = await request( testServer.app )
            .delete( apiAuthDelete )
            .set( 'token-auth', responseLogin['body']['data']['token'] )
            .expect( 200 );

        expect( body ).toEqual({ status: 'success', data: { status: 'Usuario eliminado' } });

    });

});