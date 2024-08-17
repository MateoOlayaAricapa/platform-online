import { CreateRequisitoDTO, UpdateRequisitoDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { RequisitoRepository } from "../../domain/repository";

export class RequisitoService {

    constructor(
        private readonly requisitoRepository: RequisitoRepository,
    ){}

    public async create( createRequisitosDto: CreateRequisitoDTO[] ) {

        try {

            const result = this.requisitoRepository.create( createRequisitosDto );

            return result;
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async update( updateRequisitoDto: UpdateRequisitoDTO ) {

        try {
            
            const isNothing = updateRequisitoDto.nothingToUpdate();
            if ( isNothing ) throw CustomError.badRequest('No hay datos a actualizar');

            const requisito = await this.requisitoRepository.update( updateRequisitoDto );

            return {
                requisito: { ...requisito },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }
    
    public async delete( idRequisito: number ) {

        try {
            
            const result = await this.requisitoRepository.delete( idRequisito );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }
    
    public async deleteAll( idCurso: number ) {

        try {
            
            const result = await this.requisitoRepository.deleteAll( idCurso );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}