import { Router } from "express";
import { ClaseDatasourceImpl } from "../../../infrastructure/datasource/clase.datasource.impl";
import { ClaseService } from "../../services";
import { ClaseController } from "./controller";
import { AuthMiddleware } from "../../middlewares";
import { ClaseRepositoryImpl } from "../../../infrastructure/repositories";

export class ClaseRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new ClaseDatasourceImpl();
        const claseRepository = new ClaseRepositoryImpl( datasource );
        const claseService = new ClaseService( claseRepository );

        const claseController = new ClaseController( claseService );

        //* Definiendo rutas
        router.post( '/create', [ AuthMiddleware.validateJWT ], claseController.create );
        router.put( '/update/:id', [AuthMiddleware.validateJWT], claseController.update );
        router.delete( '/delete/:id', [AuthMiddleware.validateJWT], claseController.delete );
        router.delete( '/deleteAll/:id', [AuthMiddleware.validateJWT], claseController.deleteAll );

        return router;

    }

}