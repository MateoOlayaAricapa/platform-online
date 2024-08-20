import { Request, Response } from "express"
import { ClaseService } from "../../services"
import { CreateClaseDTO, UpdateClaseDTO } from "../../../domain/DTOs"
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";

export class ClaseController {
    
    constructor(
        private readonly claseService: ClaseService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createClases, error } = CreateClaseDTO.create([ ...req.body ]);
        if ( error ) return handleErrorDTO( error, res );

        this.claseService.create( createClases! )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) );

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateClase } = UpdateClaseDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return handleErrorDTO( error, res );

        this.claseService.update( updateClase! )
            .then( clase => handleResponse( res, clase ) )
            .catch( error => handleError( error, res ) );

    }

    public delete = ( req: Request, res: Response ) => {
        
        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.claseService.delete( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) );

    }

    public deleteAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.claseService.deleteAll( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) );

    }

}