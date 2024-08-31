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
        const repository = new ClaseRepositoryImpl( datasource );
        const service    = new ClaseService( repository );

        const controller = new ClaseController( service );

        //* Definiendo rutas
        router.post( '/create', [AuthMiddleware.validateJWT], controller.create );
        router.put( '/update/:id', [AuthMiddleware.validateJWT], controller.update );
        router.delete( '/delete/:id', [AuthMiddleware.validateJWT], controller.delete );
        router.delete( '/deleteAll/:id', [AuthMiddleware.validateJWT], controller.deleteAll );

        return router;

    }

}