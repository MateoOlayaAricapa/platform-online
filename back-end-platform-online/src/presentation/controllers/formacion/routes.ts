import { Router } from "express";
import { FormacionController } from "./controller";
import { FormacionService } from "../../services";
import { FormacionDatasourceImpl } from "../../../infrastructure/datasource/formacion.datasource.impl";
import { FormacionRepositoryImpl } from "../../../infrastructure/repositories";

export class FormacionRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource          = new FormacionDatasourceImpl();
        const formacionRepository = new FormacionRepositoryImpl( datasource );
        const formacionService    = new FormacionService( formacionRepository );

        const formacionController = new FormacionController( formacionService );

        router.post( '/create', formacionController.create );
        router.put( '/update/:id', formacionController.update );
        router.delete( '/delete/:id', formacionController.delete );
        router.delete( '/deleteAll/:id', formacionController.deleteAll );

        return router;

    }
    
}