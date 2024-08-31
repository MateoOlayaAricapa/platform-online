import { Router } from "express";
import { RequisitoController } from "./controller";
import { RequisitoService } from "../../services";
import { RequisitoDatasourceImpl } from "../../../infrastructure/datasource/requisito.datasource.impl";
import { RequisitoRepositoryImpl } from "../../../infrastructure/repositories/requisito.repository.impl";
import { AuthMiddleware } from "../../middlewares";

export class RequisitoRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new RequisitoDatasourceImpl();
        const repository = new RequisitoRepositoryImpl( datasource );
        const service    = new RequisitoService( repository );
        
        const controller = new RequisitoController( service );

        //* Endpoints
        router.post( '/create', [ AuthMiddleware.validateJWT ], controller.create );
        router.put( '/update/:id', [ AuthMiddleware.validateJWT ], controller.update );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], controller.delete );
        router.delete( '/deleteAll/:id', [ AuthMiddleware.validateJWT ], controller.deleteAll );

        return router;

    }

}