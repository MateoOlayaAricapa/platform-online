import { Request, Response } from "express";
import { CreateFormacionDTO, UpdateFormacionDTO } from "../../../domain/DTOs";
import { FormacionService } from "../../services";
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";

export class FormacionController {

    constructor(
        private readonly formacionService: FormacionService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createFormaciones, error } = CreateFormacionDTO.create([ ...req.body ]);
        if ( error ) return handleErrorDTO( error, res );

        this.formacionService.create( createFormaciones! )
            .then( formaciones => handleResponse( res, formaciones ) )
            .catch( error => handleError( error, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;

        const { error, updateFormacion } = UpdateFormacionDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return handleErrorDTO( error, res );

        this.formacionService.update( updateFormacion! )
            .then( formacion => handleResponse( res, formacion ) )
            .catch( error => handleError( error, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.formacionService.delete( parseInt( id ) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public deleteAll = ( req: Request, res: Response ) => {
        
        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.formacionService.deleteAll( parseInt( id ) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

}