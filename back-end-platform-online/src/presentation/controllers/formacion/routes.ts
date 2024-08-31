import { Router } from "express";
import { FormacionController } from "./controller";
import { FormacionService } from "../../services";
import { FormacionDatasourceImpl } from "../../../infrastructure/datasource/formacion.datasource.impl";
import { FormacionRepositoryImpl } from "../../../infrastructure/repositories";
import { AuthMiddleware } from "../../middlewares";

export class FormacionRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new FormacionDatasourceImpl();
        const repository = new FormacionRepositoryImpl( datasource );
        const service    = new FormacionService( repository );

        const controller = new FormacionController( service );

        router.post( '/create', [ AuthMiddleware.validateJWT ], controller.create );
        router.put( '/update/:id', [ AuthMiddleware.validateJWT ], controller.update );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], controller.delete );
        router.delete( '/deleteAll/:id', [ AuthMiddleware.validateJWT ], controller.deleteAll );

        return router;

    }
    
}