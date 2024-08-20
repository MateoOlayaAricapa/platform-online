import { CursoDatasource } from "../../domain/datasource";
import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../../domain/DTOs";
import { CursoEntity } from "../../domain/entities";
import { CursoRepository } from "../../domain/repository";

export class CursoRepositoryImpl implements CursoRepository {

    constructor(
        private readonly datasource: CursoDatasource,
    ){}
    
    getCursoById(id: number): Promise<any> {
        return this.datasource.getCursoById( id );
    }
    
    getCursos(getAllCoursesDto: GetAllCoursesDTO): Promise<any> {
        return this.datasource.getCursos( getAllCoursesDto );
    }
    
    deleteCurso(id: number): Promise<string> {
        return this.datasource.deleteCurso( id );
    }
    
    updateCurso(updateCourseDto: UpdateCourseDTO): Promise<CursoEntity> {
        return this.datasource.updateCurso( updateCourseDto );
    }
   
    createCurso(createCourseDto: CreateCourseDTO): Promise<CursoEntity> {
        return this.datasource.createCurso( createCourseDto );
    }

}