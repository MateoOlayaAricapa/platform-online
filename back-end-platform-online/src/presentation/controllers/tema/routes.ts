import { Router } from "express";
import { TemaService } from "../../services";
import { TemaController } from "./controller";
import { TemaDatasourceImpl } from "../../../infrastructure/datasource/tema.datasource.impl";
import { TemaRepositoryImpl } from "../../../infrastructure/repositories/tema.repository.impl";
import { AuthMiddleware } from "../../middlewares";

export class TemaRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource     = new TemaDatasourceImpl();
        const repository     = new TemaRepositoryImpl( datasource );
        const temaService    = new TemaService( repository );

        const temaController = new TemaController( temaService );

        //* Endpoints
        router.post( '/create', [AuthMiddleware.validateJWT], temaController.create );
        router.put( '/update/:id', [AuthMiddleware.validateJWT], temaController.update );
        router.delete( '/delete/:id', [AuthMiddleware.validateJWT], temaController.delete );

        return router;

    }

}