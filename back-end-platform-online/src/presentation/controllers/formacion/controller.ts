import { Request, Response } from "express";
import { CreateFormacionDTO, UpdateFormacionDTO } from "../../../domain/DTOs";
import { FormacionService } from "../../services";
import { handleError } from "../../../domain/errors";

export class FormacionController {

    constructor(
        private readonly formacionService: FormacionService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createFormaciones, error } = CreateFormacionDTO.create([ ...req.body ]);
        if ( error ) return res.status(400).json({ error });

        this.formacionService.create( createFormaciones! )
            .then( formaciones => res.json({ message: 'success', data: formaciones }) )
            .catch( err => handleError( err, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;

        const { error, updateFormacion } = UpdateFormacionDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return res.status(400).json({ error });

        this.formacionService.update( updateFormacion! )
            .then( formacion => res.json({ message: 'success', data: formacion }) )
            .catch( err => handleError( err, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El id está vacío' });

        this.formacionService.delete( parseInt( id ) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    public deleteAll = ( req: Request, res: Response ) => {
        
        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El id está vacío' });

        this.formacionService.deleteAll( parseInt( id ) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

}