import { Request, Response } from "express";
import { CursoService } from "../../services";
import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../../../domain/DTOs";
import { handleError } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";
import { handleErrorDTO } from "../../../domain/errors/handle-error";

export class CursoController {

    constructor(
        private readonly cursoService: CursoService,
    ){}

    public create = ( req: Request, res: Response ) => {

        const { createCourse, error } = CreateCourseDTO.create({ ...req.body });
        if ( error ) return handleErrorDTO( error, res );

        this.cursoService.create( createCourse! )
            .then( curso => handleResponse( res, curso ) )
            .catch( error => handleError( error, res ) )

    }

    public update = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateCourse } = UpdateCourseDTO.update({ ...req.body, id: parseInt(id) });
        if ( error ) return handleErrorDTO( error, res );

        this.cursoService.update( updateCourse! )
            .then( curso => handleResponse( res, curso ) )
            .catch( error => handleError( error, res ) )

    }

    public delete = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.cursoService.delete( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public getAll = ( req: Request, res: Response ) => {

        const { user } = req.body;

        const { type } = req.params;
        const { error, getAllCourses } = GetAllCoursesDTO.getAll({ idUsuario: user.id_usuario, type });
        if ( error ) return handleErrorDTO( error, res );

        this.cursoService.getAll( getAllCourses! )
            .then( cursos => handleResponse( res, cursos ) )
            .catch( error => handleError( error, res ) )

    }

    public getById = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.cursoService.getById( parseInt( id ) )
            .then( curso => handleResponse( res, curso ) )
            .catch( error => handleError( error, res ) )

    }
 
}