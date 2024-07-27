import { NextFunction, Request, Response } from "express";
import { envs, JWTAdapter } from "../../config";
import { CustomError, handleError } from "../../domain/errors";
import { UsuarioDatasourceImpl } from "../../infrastructure/datasource/usuario.datasource.impl";
import { UsuarioRepositoryImpl } from "../../infrastructure/repositories";

export class AuthMiddleware {

    static async validateJWT( req: Request, res: Response, next: NextFunction ) {


        try {

            const tokenAuthorization = req.header('token-auth');
            if ( !tokenAuthorization ) return handleError( CustomError.unAuthorized('Token vacío') , res );

            const payload = await JWTAdapter.validateToken<{ id: number }>( tokenAuthorization, envs.SEED );
            if ( !payload ) return handleError( CustomError.unAuthorized('Token no valido'), res );

            const usuarioRepository = new UsuarioRepositoryImpl( new UsuarioDatasourceImpl() );
            const user = await usuarioRepository.getUserById( payload.id );

            req.body.user = user;

            next();
            
        } catch (error) {
            return handleError( CustomError.internalServer(`${ error }`), res );            
        }

    }

}