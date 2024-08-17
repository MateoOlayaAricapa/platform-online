import { Request, Response } from "express";
import { RequisitoService } from "../../services";
import { CreateRequisitoDTO, UpdateRequisitoDTO } from "../../../domain/DTOs";
import { handleError } from "../../../domain/errors";

export class RequisitoController {

    constructor(
        private readonly requisitoService: RequisitoService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createRequisitos, error } = CreateRequisitoDTO.create([ ...req.body ]);
        if ( error ) return res.status(400).json({ error });

        this.requisitoService.create( createRequisitos! )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateRequisito } = UpdateRequisitoDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return res.status(400).json( error );

        this.requisitoService.update( updateRequisito! )
            .then( requisito => res.json({ message: 'success', data: { ...requisito } }) )
            .catch( err => handleError( err, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'id está vacío' });

        this.requisitoService.delete( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    public deleteAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'id está vacío' });

        this.requisitoService.deleteAll( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

}