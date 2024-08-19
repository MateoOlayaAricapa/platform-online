import { Request, Response } from "express";
import { TemaService } from "../../services";
import { CreateTemaDTO, UpdateTemaDTO } from "../../../domain/DTOs";
import { handleError } from "../../../domain/errors";

export class TemaController {

    constructor(
        private readonly temaService: TemaService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createTemas, error } = CreateTemaDTO.create([ ...req.body ]);
        if ( error ) return res.status(400).json( error );

        this.temaService.create( createTemas! )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateTema } = UpdateTemaDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return res.status(400).json( error );

        this.temaService.update( updateTema! )
            .then( tema => res.json({ message: 'success', data: tema }) )
            .catch( err => handleError( err, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El id está vacío' });

        this.temaService.delete( parseInt( id ) )
            .then( result => res.json({ message: 'sucess', data: result }) )
            .catch( err => handleError( err, res ) )

    }

}