import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../../services";
import { UsuarioDatasourceImpl } from "../../../infrastructure/datasource/usuario.datasource.impl";
import { UsuarioRepositoryImpl } from "../../../infrastructure/repositories";
import { AuthMiddleware } from "../../middlewares";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new UsuarioDatasourceImpl();
        const repository = new UsuarioRepositoryImpl( datasource );
        const service    = new AuthService( repository );
        
        const controller = new AuthController( service );

        //* EndPoints
        router.post('/login', controller.login );
        router.post( '/register', controller.register );
        router.put( '/update', [ AuthMiddleware.validateJWT ], controller.update );
        router.delete( '/delete', [ AuthMiddleware.validateJWT ], controller.delete );

        return router;

    }

}