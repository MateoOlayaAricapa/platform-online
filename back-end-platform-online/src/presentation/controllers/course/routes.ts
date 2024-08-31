import { Router } from "express";
import { CursoController } from "./controller";
import { CursoService } from "../../services";
import { CursoRepositoryImpl } from '../../../infrastructure/repositories/curso.repository.impl';
import { CursoDataSourceImpl } from "../../../infrastructure/datasource/curso.datasource.impl";
import { AuthMiddleware } from "../../middlewares";

export class CursoRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource   = new CursoDataSourceImpl();
        const repository   = new CursoRepositoryImpl( datasource );
        const service      = new CursoService( repository );

        const controller   = new CursoController( service );

        //* Definiendo endpoints
        router.post( '/create', [ AuthMiddleware.validateJWT ] ,controller.create );
        router.put( '/update/:id', [ AuthMiddleware.validateJWT ], controller.update );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], controller.delete );

        router.get( '/getAll/:type', [ AuthMiddleware.validateJWT ], controller.getAll );
        router.get( '/get/:id', [ AuthMiddleware.validateJWT ], controller.getById );

        return router;

    }
    
}