import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../../services";
import { prisma } from "../../../data/postgres";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        const authService = new AuthService( prisma );
        const authController = new AuthController( authService );

        //* EndPoints
        router.get('/login', authController.login );

        return router;

    }

}