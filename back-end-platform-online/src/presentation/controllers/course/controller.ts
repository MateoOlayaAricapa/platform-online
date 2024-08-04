import { Request, Response } from "express";
import { CursoService } from "../../services";
import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../../../domain/DTOs";
import { handleError } from "../../../domain/errors";

export class CursoController {

    constructor(
        private readonly cursoService: CursoService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createCourse, error } = CreateCourseDTO.create({ ...req.body });
        if ( error ) return res.status( 400 ).json( error );

        this.cursoService.createCurso( createCourse! )
            .then( curso => res.json({ message: 'success', data: { ...curso } }) )
            .catch( err => handleError( err, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateCourse } = UpdateCourseDTO.update({ ...req.body, id: parseInt(id) });
        if ( error ) return res.status( 400 ).json( error );

        this.cursoService.updateCurso( updateCourse! )
            .then( curso => res.json({ message: 'success', data: { ...curso } }) )
            .catch( err => handleError( err, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({error: 'El campo [id] está vacío'});

        this.cursoService.deleteCurso( parseInt(id) )
            .then( result => res.json({ message: 'success', data: { ...result } }) )
            .catch( err => handleError( err, res ) )

    }

    public getAll = ( req: Request, res: Response ) => {

        const { user } = req.body;

        const { type } = req.params;
        const { error, getAllCourses } = GetAllCoursesDTO.getAll({ idUsuario: user.id_usuario, type });
        if ( error ) return res.status( 400 ).json( error );

        this.cursoService.getCursos( getAllCourses! )
            .then( cursos => res.json({ message: 'success', data: cursos }) )
            .catch( err => handleError( err, res ) )

    }

    public getById = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return res.status(400).json({ error: 'El id del curso está vacío' });

        this.cursoService.getCursoById( parseInt( id ) )
            .then( curso => res.json({ message: 'success', data: curso }) )
            .catch( err => handleError( err, res ) )

    }
 
}