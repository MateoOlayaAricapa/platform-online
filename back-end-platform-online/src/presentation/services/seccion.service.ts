import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { SeccionRepository } from "../../domain/repository";

export class SeccionService {

    constructor(
        private readonly seccionRepository: SeccionRepository,
    ){}

    public async create( createSeccionDto: CreateSeccionDTO ) {

        try {
            
            const { id_seccion, ...seccionEntity } = await this.seccionRepository.createSeccion( createSeccionDto );

            return {
                seccion: { ...seccionEntity },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async update( updateSeccionDto: UpdateSeccionDTO ) {

        try {
            
            const { id_seccion, ...seccionEntity } = await this.seccionRepository.updateSeccion( updateSeccionDto );

            return {
                seccion: { ...seccionEntity }
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteAll( idCurso: number ) {

        try {
            
            const result = await this.seccionRepository.deleteSecciones( idCurso );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async delete( idSeccion: number ) {

        try {
            
            const result = await this.seccionRepository.deleteSeccion( idSeccion );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}