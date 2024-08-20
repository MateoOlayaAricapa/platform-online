import { Request, Response } from "express";
import { AsociativaService } from "../../services/asociativa.service";
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../../../domain/DTOs";
import { handleResponse } from "../../../domain/responses-http";

export class AsociativaController {

    constructor(
        private readonly asociativaService: AsociativaService,
    ){}

    //* Entidad usuario_curso
    public createUsuarioCurso = ( req: Request, res: Response ) => {

        const { user } = req.body;

        const { createUserCourse, error } = CreateUserCourseDTO.create({ ...req.body, id_usuario: user.id_usuario });
        if ( error ) return handleErrorDTO( error, res );

        this.asociativaService.createUsuarioCurso( createUserCourse! )
            .then( usuarioCurso => handleResponse( res, usuarioCurso ) )
            .catch( error => handleError( error, res ) )

    }

    public updateUsuarioCurso = ( req: Request, res: Response ) => {

        const { id } = req.params;
        const { error, updateUsuarioCurso } = UpdateUserCourseDTO.update({ ...req.body, id: parseInt(id) });
        if ( error ) return handleErrorDTO( error, res );

        this.asociativaService.updateUsuarioCurso( updateUsuarioCurso! )
            .then( usuarioCurso => handleResponse( res, usuarioCurso ) )
            .catch( error => handleError( error, res ) )

    }

    public deleteUsuarioCurso = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.asociativaService.deleteUsuarioCurso( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    //* Entidad curso_tema
    public createCursoTema = ( req: Request, res: Response ) => {

        const { createCoursesTopics, error } = CreateCourseTopicDTO.create([ ...req.body ]);
        if ( error ) return handleErrorDTO( error, res );

        this.asociativaService.createCursoTema( createCoursesTopics! )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public deleteCursoTema = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );
        
        this.asociativaService.deleteCursoTema( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

    public deleteCursoTemaAll = ( req: Request, res: Response ) => {

        const { id } = req.params;
        if ( !id ) return handleErrorDTO( 'El id está vacío', res );

        this.asociativaService.deleteCursoTemaAll( parseInt(id) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

}