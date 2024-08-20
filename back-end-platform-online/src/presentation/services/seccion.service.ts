import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { SeccionRepository } from "../../domain/repository";

export class SeccionService {

    constructor(
        private readonly seccionRepository: SeccionRepository,
    ){}

    public async create( createSeccionDto: CreateSeccionDTO ) {

        try {
            
            const seccion = await this.seccionRepository.create( createSeccionDto );

            return {
                seccion: { ...seccion },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async update( updateSeccionDto: UpdateSeccionDTO ) {

        try {
            
            const isNothing = updateSeccionDto.nothingToUpdate();
            if ( isNothing ) throw CustomError.badRequest('No hay datos a actualizar');
            
            const { id_seccion, ...seccionEntity } = await this.seccionRepository.update( updateSeccionDto );

            return {
                seccion: { ...seccionEntity }
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteAll( idCurso: number ) {

        try {
            
            const result = await this.seccionRepository.deleteAll( idCurso );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async delete( idSeccion: number ) {

        try {
            
            const result = await this.seccionRepository.delete( idSeccion );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}