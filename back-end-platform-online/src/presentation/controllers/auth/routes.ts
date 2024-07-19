import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../../services";
import { UsuarioDatasourceImpl } from "../../../infrastructure/datasource/usuario.datasource.impl";
import { UsuarioRepositoryImpl } from "../../../infrastructure/repositories";

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
        router.put( '/update/:id', authController.update );
        router.delete( '/delete/:id', authController.delete );

        return router;

    }

}