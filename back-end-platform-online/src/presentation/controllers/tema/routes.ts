import { Router } from "express";
import { TemaService } from "../../services";
import { TemaController } from "./controller";
import { TemaDatasourceImpl } from "../../../infrastructure/datasource/tema.datasource.impl";
import { TemaRepositoryImpl } from "../../../infrastructure/repositories/tema.repository.impl";
import { AuthMiddleware } from "../../middlewares";

export class TemaRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource    = new TemaDatasourceImpl();
        const repository    = new TemaRepositoryImpl( datasource );
        const service       = new TemaService( repository );

        const controller    = new TemaController( service );

        //* Endpoints
        router.post( '/create', [AuthMiddleware.validateJWT], controller.create );
        router.put( '/update/:id', [AuthMiddleware.validateJWT], controller.update );
        router.delete( '/delete/:id', [AuthMiddleware.validateJWT], controller.delete );

        return router;

    }

}