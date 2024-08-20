import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../DTOs";
import { AllCursosEntity, CursoEntity } from "../entities";

export abstract class CursoDatasource {

    abstract createCurso( createCourseDto: CreateCourseDTO ): Promise<CursoEntity>;
    abstract updateCurso( updateCourseDto: UpdateCourseDTO ): Promise<CursoEntity>;
    abstract deleteCurso( id: number ): Promise<string>; 
    abstract getCursoById( id: number ): Promise<any>;
    abstract getCursos( getAllCoursesDto: GetAllCoursesDTO ): Promise<AllCursosEntity[]>;

    abstract isCursoExist( id: number ): Promise<boolean>;

}