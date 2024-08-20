import { AsociativaDatasource } from "../../domain/datasource";
import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../../domain/DTOs";
import { CursoTemaEntity, UsuarioCursoEntity } from "../../domain/entities";
import { AsociativaRepository } from "../../domain/repository";

export class AsociativaRepositoryImpl implements AsociativaRepository {
    
    constructor(
        private readonly datasource: AsociativaDatasource,
    ){}

    //* Entidad usuario_curso
    updateUsuarioCurso( updateUserCourseDto: UpdateUserCourseDTO ): Promise<UsuarioCursoEntity> {
        return this.datasource.updateUsuarioCurso( updateUserCourseDto );
    }

    deleteUsuarioCurso( id: number ): Promise<string> {
        return this.datasource.deleteUsuarioCurso( id );
    }

    createUsuarioCurso( createUserCourseDto: CreateUserCourseDTO ): Promise<UsuarioCursoEntity> {
        return this.datasource.createUsuarioCurso( createUserCourseDto );
    }

    //* Entidad curso_tema
    getCursoTemaById( id: number ): Promise<CursoTemaEntity> {
        return this.datasource.getCursoTemaById( id );
    }

    createCursoTema( createCoursesTopicsDto: CreateCourseTopicDTO[] ): Promise<string> {
        return this.datasource.createCursoTema( createCoursesTopicsDto );
    }

    deleteCursoTema( id: number ): Promise<string> {
        return this.datasource.deleteCursoTema( id );
    }

    deleteCursoTemaAll( idCurso: number ): Promise<string> {
        return this.datasource.deleteCursoTemaAll( idCurso );
    }

}