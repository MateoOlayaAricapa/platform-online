import { Router } from "express";
import { RequisitoController } from "./controller";
import { RequisitoService } from "../../services";
import { RequisitoDatasourceImpl } from "../../../infrastructure/datasource/requisito.datasource.impl";
import { RequisitoRepositoryImpl } from "../../../infrastructure/repositories/requisito.repository.impl";

export class RequisitoRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource          = new RequisitoDatasourceImpl();
        const requisitoRepository = new RequisitoRepositoryImpl( datasource );
        const requisitoService    = new RequisitoService( requisitoRepository );
        
        const requisitoController = new RequisitoController( requisitoService );

        //* Endpoints
        router.post( '/create', requisitoController.create );
        router.put( '/update/:id', requisitoController.update );
        router.delete( '/delete/:id', requisitoController.delete );
        router.delete( '/deleteAll/:id', requisitoController.deleteAll );

        return router;

    }

}