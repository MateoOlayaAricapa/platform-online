import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../DTOs";
import { CursoTemaEntity, UsuarioCursoEntity } from "../entities";

export abstract class AsociativaDatasource {

    //* Entidad usuario_curso
    abstract createUsuarioCurso( createUserCourseDto: CreateUserCourseDTO ): Promise<UsuarioCursoEntity>;
    abstract updateUsuarioCurso( updateUserCourseDto: UpdateUserCourseDTO ): Promise<UsuarioCursoEntity>;
    abstract getUsuarioCursoById( id: number ): Promise<UsuarioCursoEntity>;
    abstract deleteUsuarioCurso( id: number ): Promise<string>

    //* Entidad curso_tema
    abstract createCursoTema( createCourseTopicDto: CreateCourseTopicDTO ): Promise<CursoTemaEntity>;
    abstract deleteCursoTema( id: number ): Promise<string>;
    abstract getCursoTemaById( id: number ): Promise<CursoTemaEntity>;

}