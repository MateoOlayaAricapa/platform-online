import { Router } from "express";
import { AsociativaController } from "./controller";
import { AsociativaDatasourceImpl } from "../../../infrastructure/datasource/asociativa.datasource.impl";
import { AsociativaRepositoryImpl } from "../../../infrastructure/repositories/asociativa.repository.impl";
import { AsociativaService } from "../../services";
import { AuthMiddleware } from "../../middlewares";

export class AsociativaRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource    = new AsociativaDatasourceImpl();
        const repository    = new AsociativaRepositoryImpl( datasource );
        const service       = new AsociativaService( repository );

        const controller    = new AsociativaController( service );

        //* Definiendo endpoints
        router.post( '/create/usuario-curso', [ AuthMiddleware.validateJWT ], controller.createUsuarioCurso );
        router.put( '/update/usuario-curso/:id', [ AuthMiddleware.validateJWT ], controller.updateUsuarioCurso );
        router.delete( '/delete/usuario-curso/:id', [ AuthMiddleware.validateJWT ], controller.deleteUsuarioCurso );

        router.post( '/create/curso-tema', [ AuthMiddleware.validateJWT ], controller.createCursoTema );
        router.delete( '/delete/curso-tema/:id', [ AuthMiddleware.validateJWT ], controller.deleteCursoTema );
        router.delete( '/deleteAll/curso-tema/:id', [ AuthMiddleware.validateJWT ], controller.deleteCursoTemaAll );

        return router;

    }

}