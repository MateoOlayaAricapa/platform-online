import { Router } from "express";
import { AsociativaRoutes, AuthRoutes, ClaseRoutes, CursoRoutes, SeccionRoutes } from "./controllers";

export class GlobalRoutes {

    static get routes(): Router {

        const router = Router();

        //* EndPoints globales
        router.use( '/api/auth', AuthRoutes.routes );
        router.use( '/api/curso', CursoRoutes.routes );
        router.use( '/api/asociativa', AsociativaRoutes.routes );
        router.use( '/api/seccion', SeccionRoutes.routes );
        router.use( '/api/clase', ClaseRoutes.routes );

        return router;

    }

}