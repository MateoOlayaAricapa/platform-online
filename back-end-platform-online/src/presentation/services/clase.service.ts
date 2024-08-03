import { CreateClaseDTO, UpdateClaseDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { ClaseRepository } from "../../domain/repository";

export class ClaseService {
    
    constructor(
        private readonly claseRepository: ClaseRepository,
    ){}

    public async create( createClaseDto: CreateClaseDTO ) {

        try {

            const clase = await this.claseRepository.create( createClaseDto );

            return {
                clase: { ...clase },
            }
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async update( updateClaseDto: UpdateClaseDTO ) {

        try {

            const clase = await this.claseRepository.update( updateClaseDto );

            return {
                clase: { ...clase }
            }
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async delete( id: number ) {
        
        try {
            
            const result = await this.claseRepository.delete( id );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteAll( id: number ) {
        
        try {
            
            const result = await this.claseRepository.deleteAll( id );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}