import { Request, Response } from "express"
import { ClaseService } from "../../services"
import { CreateClaseDTO, UpdateClaseDTO } from "../../../domain/DTOs"
import { handleError } from "../../../domain/errors";

export class ClaseController {
    
    constructor(
        private readonly claseService: ClaseService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createClase, error } = CreateClaseDTO.create({ ...req.body });
        if ( error ) return res.status(400).json({ error });

        this.claseService.create( createClase! )
            .then( clase => res.json({ message: 'success', data: { ...clase } }) )
            .catch( err => handleError( err, res ) );

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateClase } = UpdateClaseDTO.update({ ...req.body, id: parseInt( id ) });
        if ( error ) return res.status(400).json({ error });

        this.claseService.update( updateClase! )
            .then( clase => res.json({ message: 'success', data: { ...clase } }) )
            .catch( err => handleError( err, res ) );

    }

    public delete = ( req: Request, res: Response ) => {
        
        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: `El campo id está vacío` });

        this.claseService.delete( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) );

    }

    public deleteAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: `El campo id está vacío` });

        this.claseService.deleteAll( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) );

    }

}