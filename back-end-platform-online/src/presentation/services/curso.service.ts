import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { CursoRepository } from "../../domain/repository";

export class CursoService {

    constructor(
        private readonly cursoRepository: CursoRepository,
    ){}

    public async createCurso( createCursoDto: CreateCourseDTO ) {

        try {

            const curso = await this.cursoRepository.createCurso( createCursoDto );
            
            return {
                curso: { ...curso },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async updateCurso( updateCursoDto: UpdateCourseDTO ) {

        try {

            const { id_curso, ...cursoEntity } = await this.cursoRepository.updateCurso( updateCursoDto );
            
            return {
                curso: { ...cursoEntity }
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteCurso( id: number ) {

        try {
            
            const result = await this.cursoRepository.deleteCurso( id );

            return {
                status: result,
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async getCursos( getAllCourses: GetAllCoursesDTO ) {

        try {
            
            const cursos = await this.cursoRepository.getCursos( getAllCourses );

            return cursos;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async getCursoById( id: number ) {

        try {
            
            const curso = await this.cursoRepository.getCursoById( id );

            return curso;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}