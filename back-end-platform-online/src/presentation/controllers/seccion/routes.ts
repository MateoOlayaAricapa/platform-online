import { Router } from "express";
import { SeccionController } from "./controller";
import { SeccionService } from "../../services";
import { SeccionDatasourceImpl } from "../../../infrastructure/datasource/seccion.datasource.impl";
import { SeccionRepositoryImpl } from "../../../infrastructure/repositories/seccion.repository.impl";
import { AuthMiddleware } from '../../middlewares/auth.middleware';

export class SeccionRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new SeccionDatasourceImpl();
        const seccionRepository = new SeccionRepositoryImpl( datasource );
        const seccionService = new SeccionService( seccionRepository );

        const seccionController = new SeccionController( seccionService );

        //* Endpoints.
        router.post( '/create', seccionController.create );
        router.put( '/update/:id', seccionController.update );
        router.delete( '/deleteAll/:id', [ AuthMiddleware.validateJWT ], seccionController.deleteAll );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], seccionController.delete );

        return router;

    }

}