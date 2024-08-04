import { Router } from "express";
import { CursoController } from "./controller";
import { CursoService } from "../../services";
import { CursoRepositoryImpl } from '../../../infrastructure/repositories/curso.repository.impl';
import { CursoDataSourceImpl } from "../../../infrastructure/datasource/curso.datasource.impl";
import { AuthMiddleware } from "../../middlewares";

export class CursoRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new CursoDataSourceImpl();
        const cursoRepository = new CursoRepositoryImpl( datasource );
        const cursoService = new CursoService( cursoRepository );

        const cursoController = new CursoController( cursoService );

        //* Definiendo endpoints
        router.post( '/create', [ AuthMiddleware.validateJWT ] ,cursoController.create );
        router.put( '/update/:id', [ AuthMiddleware.validateJWT ], cursoController.update );
        router.delete( '/delete/:id', [ AuthMiddleware.validateJWT ], cursoController.delete );

        router.get( '/getAll/:type', [ AuthMiddleware.validateJWT ], cursoController.getAll );
        router.get( '/get/:id', [ AuthMiddleware.validateJWT ], cursoController.getById );

        return router;

    }
    
}