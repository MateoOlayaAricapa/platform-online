import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../DTOs";
import { CursoTemaEntity, UsuarioCursoEntity } from "../entities";

export abstract class AsociativaRepository {

    //* Entidad usuario_curso
    abstract createUsuarioCurso( createUserCourseDto: CreateUserCourseDTO ): Promise<UsuarioCursoEntity>;
    abstract updateUsuarioCurso( updateUserCourseDto: UpdateUserCourseDTO ): Promise<UsuarioCursoEntity>;
    abstract deleteUsuarioCurso( id: number ): Promise<string>

    //* Entidad curso_tema
    abstract createCursoTema( createCoursesTopicsDto: CreateCourseTopicDTO[] ): Promise<string>;
    abstract deleteCursoTema( id: number ): Promise<string>;
    abstract deleteCursoTemaAll( idCurso: number ): Promise<string>;
    abstract getCursoTemaById( id: number ): Promise<CursoTemaEntity>;

}