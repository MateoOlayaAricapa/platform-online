import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { AsociativaRepository } from "../../domain/repository";

export class AsociativaService {

    constructor(
        private readonly asociativaRepository: AsociativaRepository,
    ){}

    //* Entidad usuario_curso
    public async createUsuarioCurso( createUsuarioCursoDto: CreateUserCourseDTO ) {

        try {
            
            const { estaCompletado, rol } = await this.asociativaRepository.createUsuarioCurso( createUsuarioCursoDto );
 
            return {
                usuario_curso: { estaCompletado, rol },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async updateUsuarioCurso( updateUsuarioCursoDto: UpdateUserCourseDTO ) {

        try {
            
            const usuario_curso = await this.asociativaRepository.updateUsuarioCurso( updateUsuarioCursoDto );

            return {
                usuarioCurso: { ...usuario_curso },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteUsuarioCurso( id: number ) {

        try {
            
            const result = await this.asociativaRepository.deleteUsuarioCurso( id );

            return {
                status: result
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    //* Entidad curso_tema
    public async createCursoTema( createCursoTemaDto: CreateCourseTopicDTO ) {

        try {
            
            const curso_tema = await this.asociativaRepository.createCursoTema( createCursoTemaDto );

            return {
                curso_tema: { ...curso_tema },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteCursoTema( id: number ) {

        try {

            const result = await this.asociativaRepository.deleteCursoTema( id );

            return {
                status: result,
            }
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}