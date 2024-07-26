import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../DTOs";
import { CursoEntity } from "../entities";

export abstract class CursoRepository {

    abstract createCurso( createCourseDto: CreateCourseDTO ): Promise<CursoEntity>;
    abstract updateCurso( updateCourseDto: UpdateCourseDTO ): Promise<CursoEntity>;
    abstract deleteCurso( id:number ): Promise<string>; 
    abstract getCursoById( id: number ): Promise<any>;
    abstract getCursos( getAllCoursesDto: GetAllCoursesDTO ): Promise<any>;
    
}