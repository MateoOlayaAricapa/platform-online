import { NextFunction, Request, Response } from "express";
import { envs, JWTAdapter } from "../../config";
import { CustomError } from "../../domain/errors";
import { UsuarioDatasourceImpl } from "../../infrastructure/datasource/usuario.datasource.impl";
import { UsuarioRepositoryImpl } from "../../infrastructure/repositories";

export class AuthMiddleware {

    static async validateJWT( req: Request, res: Response, next: NextFunction ) {


        try {

            const tokenAuthorization = req.header('token-auth');
            if ( !tokenAuthorization ) throw CustomError.unAuthorized('Token vacío');

            const payload = await JWTAdapter.validateToken<{ id: number }>( tokenAuthorization, envs.SEED );
            if ( !payload ) throw CustomError.unAuthorized('Token no valido');

            const usuarioRepository = new UsuarioRepositoryImpl( new UsuarioDatasourceImpl() );
            const user = usuarioRepository.getUserById( payload.id );

            req.body.user = user;

            next();
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);            
        }

    }

}