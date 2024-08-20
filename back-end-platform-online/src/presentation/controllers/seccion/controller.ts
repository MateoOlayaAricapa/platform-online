import { Request, Response } from "express";
import { SeccionService } from "../../services";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../../domain/DTOs";
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";

export class SeccionController {

    constructor(
        private readonly seccionService: SeccionService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { error, createSeccion } = CreateSeccionDTO.create({ ...req.body });
        if ( error ) return handleErrorDTO( error, res );

        this.seccionService.create( createSeccion! )
            .then( seccion => handleResponse( res, seccion ) )
            .catch( error => handleError( error, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateSeccion } = UpdateSeccionDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return handleErrorDTO( error, res );

        this.seccionService.update( updateSeccion! )
            .then( seccion => handleResponse( res, seccion ) )
            .catch( error => handleError( error, res ) )

    }

    public deleteAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.seccionService.deleteAll( parseInt( id ) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.seccionService.delete( parseInt( id ) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

}