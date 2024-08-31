import request from "supertest";
import { ServerApp } from "../../src/presentation/serverApp";

export const getTokenUser = async( testServer: ServerApp ) => {

    const responseLogin = await request( testServer.app )
        .get( '/api/auth/login' )
        .send( { email: 'test1@gmail.com', password: 'password' } );

    return responseLogin['body']['data']['token'];

}