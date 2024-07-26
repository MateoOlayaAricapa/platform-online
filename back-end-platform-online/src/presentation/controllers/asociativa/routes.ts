import { Router } from "express";
import { AsociativaController } from "./controller";
import { AsociativaDatasourceImpl } from "../../../infrastructure/datasource/asociativa.datasource.impl";
import { AsociativaRepositoryImpl } from "../../../infrastructure/repositories/asociativa.repository.impl";
import { AsociativaService } from "../../services";
import { AuthMiddleware } from "../../middlewares";

export class AsociativaRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AsociativaDatasourceImpl();
        const asociativaRepository = new AsociativaRepositoryImpl( datasource );
        const asociativaService = new AsociativaService( asociativaRepository );

        const asociativaController = new AsociativaController( asociativaService );

        //* Definiendo endpoints
        router.post( '/create/usuario-curso', [ AuthMiddleware.validateJWT ], asociativaController.createUsuarioCurso );
        router.put( '/update/usuario-curso/:id', [ AuthMiddleware.validateJWT ], asociativaController.updateUsuarioCurso );
        router.delete( '/delete/usuario-curso/:id', [ AuthMiddleware.validateJWT ], asociativaController.deleteUsuarioCurso );

        router.post( '/create/curso-tema', [ AuthMiddleware.validateJWT ], asociativaController.createCursoTema );
        router.delete( '/delete/curso-tema/:id', [ AuthMiddleware.validateJWT ], asociativaController.deleteCursoTema );

        return router;

    }

}