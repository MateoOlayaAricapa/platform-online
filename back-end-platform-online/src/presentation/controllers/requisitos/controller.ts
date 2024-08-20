import { Request, Response } from "express";
import { RequisitoService } from "../../services";
import { CreateRequisitoDTO, UpdateRequisitoDTO } from "../../../domain/DTOs";
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";

export class RequisitoController {

    constructor(
        private readonly requisitoService: RequisitoService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createRequisitos, error } = CreateRequisitoDTO.create([ ...req.body ]);
        if ( error ) return handleErrorDTO( error, res );

        this.requisitoService.create( createRequisitos! )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateRequisito } = UpdateRequisitoDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return handleErrorDTO( error, res );

        this.requisitoService.update( updateRequisito! )
            .then( requisito => handleResponse( res, requisito ) )
            .catch( error => handleError( error, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.requisitoService.delete( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public deleteAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.requisitoService.deleteAll( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

}