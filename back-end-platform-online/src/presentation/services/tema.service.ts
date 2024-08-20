import { CreateTemaDTO, UpdateTemaDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { TemaRepository } from "../../domain/repository";

export class TemaService {

    constructor(
        private readonly temaRepository: TemaRepository,
    ){}

    public async create( createTemasDto: CreateTemaDTO[] ) {

        try {

            const result = await this.temaRepository.create( createTemasDto );

            return result;
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async update( updateTemaDto: UpdateTemaDTO ) {

        try {
            
            const isNothing = updateTemaDto.nothingToUpdate();
            if ( isNothing ) throw CustomError.badRequest('No hay datos a actualizar');

            const { id_tema, ...temaEntity } = await this.temaRepository.update( updateTemaDto );

            return {
                tema: temaEntity,
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async delete( id: number ) {

        try {

            const result = await this.temaRepository.delete( id );

            return result;
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}