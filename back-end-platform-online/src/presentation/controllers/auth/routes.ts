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
        const usuarioRepository = new UsuarioRepositoryImpl( datasource );
        const authService = new AuthService( usuarioRepository );
        
        const authController = new AuthController( authService );

        //* EndPoints
        router.get('/login', authController.login );
        router.post( '/register', authController.register );
        router.put( '/update', [ AuthMiddleware.validateJWT ], authController.update );
        router.delete( '/delete', [ AuthMiddleware.validateJWT ], authController.delete );

        return router;

    }

}