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
        const repository = new SeccionRepositoryImpl( datasource );
        const service    = new SeccionService( repository );

        const controller = new SeccionController( service );

        //* Endpoints.
        router.post( '/create', [ AuthMiddleware.validateJWT ], controller.create );
        router.put( '/update/:id', [ AuthMiddleware.validateJWT ], controller.update );
        router.delete( '/deleteAll/:id', [ AuthMiddleware.validateJWT ], controller.deleteAll );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], controller.delete );

        return router;

    }

}