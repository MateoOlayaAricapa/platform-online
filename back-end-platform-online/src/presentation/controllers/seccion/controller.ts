import { Request, Response } from "express";
import { SeccionService } from "../../services";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../../domain/DTOs";
import { handleError } from "../../../domain/errors";

export class SeccionController {

    constructor(
        private readonly seccionService: SeccionService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { error, createSeccion } = CreateSeccionDTO.create({ ...req.body });
        if ( error ) return res.status(400).json( error );

        this.seccionService.create( createSeccion! )
            .then( seccion => res.json({ message: 'success', data: {...seccion } }) )
            .catch( err => handleError( err, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateSeccion } = UpdateSeccionDTO.update({ ...req.body, id });
        if ( error ) return res.status(400).json( error );

        this.seccionService.update( updateSeccion! )
            .then( seccion => res.json({ message: 'success', data: { ...seccion } }) )
            .catch( err => handleError( err, res ) )

    }

    public deleteAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El [id] del curso está vacío' });

        this.seccionService.deleteAll( parseInt( id ) )
            .then( result => res.json({ message: result }) )
            .catch( err => handleError( err, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El [id] de la sección está vacío' });

        this.seccionService.delete( parseInt( id ) )
            .then( result => res.json({ message: result }) )
            .catch( err => handleError( err, res ) )

    }

}