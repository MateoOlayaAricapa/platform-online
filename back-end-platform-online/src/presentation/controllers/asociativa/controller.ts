import { Request, Response } from "express";
import { AsociativaService } from "../../services/asociativa.service";
import { handleError } from "../../../domain/errors";
import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../../../domain/DTOs";

export class AsociativaController {

    constructor(
        private readonly asociativaService: AsociativaService,
    ){}

    //* Entidad usuario_curso
    public createUsuarioCurso = ( req: Request, res: Response ) => {

        const { user } = req.body;

        const { createUserCourse, error } = CreateUserCourseDTO.create({ ...req.body, id_usuario: user.id_usuario });
        if ( error ) return res.status( 400 ).json( error );

        this.asociativaService.createUsuarioCurso( createUserCourse! )
            .then( usuarioCurso => res.json({ message: 'success', data: { ...usuarioCurso } }) )
            .catch( err => handleError( err, res ) )

    }

    public updateUsuarioCurso = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateUsuarioCurso } = UpdateUserCourseDTO.update({ ...req.body, id: parseInt(id) });
        if ( error ) return res.status( 400 ).json( error );

        this.asociativaService.updateUsuarioCurso( updateUsuarioCurso! )
            .then( usuarioCurso => res.json({ message: 'success', data: usuarioCurso }) )
            .catch( err => handleError( err, res ) )

    }

    public deleteUsuarioCurso = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El campo [id] está vacío' });

        this.asociativaService.deleteUsuarioCurso( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    //* Entidad curso_tema
    public createCursoTema = ( req: Request, res: Response ) => {

        const { createCoursesTopics, error } = CreateCourseTopicDTO.create([ ...req.body ]);
        if ( error ) return res.status( 400 ).json( error );

        this.asociativaService.createCursoTema( createCoursesTopics! )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    public deleteCursoTema = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El campo [id] está vacío' });
        
        this.asociativaService.deleteCursoTema( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

    public deleteCursoTemaAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'id está vacío' });

        this.asociativaService.deleteCursoTemaAll( parseInt(id) )
            .then( result => res.json({ message: 'success', data: result }) )
            .catch( err => handleError( err, res ) )

    }

}