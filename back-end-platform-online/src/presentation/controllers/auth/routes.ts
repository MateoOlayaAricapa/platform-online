import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../../services";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        const authController = new AuthController( new AuthService() )

        //* EndPoints
        router.get('/login', authController.login );

        return router;

    }

}