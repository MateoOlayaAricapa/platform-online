import { UpdateFormacionDTO } from '../../domain/DTOs';
import { CreateFormacionDTO } from '../../domain/DTOs/formacion/create-formacion.dto';
import { CustomError } from '../../domain/errors';
import { FormacionRepository } from '../../domain/repository';

export class FormacionService {

    constructor(
        private readonly formacionRepository: FormacionRepository
    ){}

    public async create( createFormacionesDto: CreateFormacionDTO[] ) {
        
        try {
            
            const formaciones = await this.formacionRepository.create( createFormacionesDto );

            return {
                formaciones,
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async update( updateFormacionDto: UpdateFormacionDTO ) {
        
        try {
            
            const isNothing = updateFormacionDto.nothingToUpdate();
            if ( isNothing ) throw CustomError.badRequest('No hay datos a actualizar');

            const formacion = await this.formacionRepository.update( updateFormacionDto );

            return {
                formacion: { ...formacion },
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async delete( idFormacion: number ) {
        
        try {
            
            const result = await this.formacionRepository.delete( idFormacion );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteAll( idCurso: number ) {
        
        try {
            
            const result = await this.formacionRepository.deleteAll( idCurso );

            return result;

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}