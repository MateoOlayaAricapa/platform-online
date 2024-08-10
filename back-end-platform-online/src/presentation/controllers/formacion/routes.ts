import { Router } from "express";
import { FormacionController } from "./controller";
import { FormacionService } from "../../services";
import { FormacionDatasourceImpl } from "../../../infrastructure/datasource/formacion.datasource.impl";
import { FormacionRepositoryImpl } from "../../../infrastructure/repositories";
import { AuthMiddleware } from "../../middlewares";

export class FormacionRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource          = new FormacionDatasourceImpl();
        const formacionRepository = new FormacionRepositoryImpl( datasource );
        const formacionService    = new FormacionService( formacionRepository );

        const formacionController = new FormacionController( formacionService );

        router.post( '/create', [ AuthMiddleware.validateJWT ], formacionController.create );
        router.put( '/update/:id', [ AuthMiddleware.validateJWT ], formacionController.update );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], formacionController.delete );
        router.delete( '/deleteAll/:id', [ AuthMiddleware.validateJWT ], formacionController.deleteAll );

        return router;

    }
    
}