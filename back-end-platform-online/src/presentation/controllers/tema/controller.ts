import { Request, Response } from "express";
import { TemaService } from "../../services";
import { CreateTemaDTO, UpdateTemaDTO } from "../../../domain/DTOs";
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";

export class TemaController {

    constructor(
        private readonly temaService: TemaService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createTemas, error } = CreateTemaDTO.create([ ...req.body ]);
        if ( error ) return handleErrorDTO( error, res );

        this.temaService.create( createTemas! )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateTema } = UpdateTemaDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return handleErrorDTO( error, res );

        this.temaService.update( updateTema! )
            .then( tema => handleResponse( res, tema ) )
            .catch( error => handleError( error, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.temaService.delete( parseInt( id ) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

}