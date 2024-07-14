import { Router } from "express";
import { AuthRoutes } from "./controllers";

export class GlobalRoutes {

    static get routes(): Router {

        const router = Router();

        //* EndPoints globales
        router.use( '/api/auth', AuthRoutes.routes );

        return router;

    }

}