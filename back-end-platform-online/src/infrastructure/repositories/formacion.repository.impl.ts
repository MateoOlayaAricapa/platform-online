import { FormacionDatasource } from "../../domain/datasource";
import { CreateFormacionDTO, UpdateFormacionDTO } from "../../domain/DTOs";
import { FormacionEntity } from "../../domain/entities";
import { FormacionRepository } from "../../domain/repository";

export class FormacionRepositoryImpl implements FormacionRepository {

    constructor(
        private readonly datasource: FormacionDatasource
    ){}

    create( createFormacionesDto: CreateFormacionDTO[] ): Promise<FormacionEntity[]> {
        return this.datasource.create( createFormacionesDto );
    }

    update( updateFormacionDto: UpdateFormacionDTO ): Promise<FormacionEntity> {
        return this.datasource.update( updateFormacionDto );
    }

    delete( idFormacion: number ): Promise<string> {
        return this.datasource.delete( idFormacion );
    }

    deleteAll( idCurso: number ): Promise<string> {
        return this.datasource.deleteAll( idCurso );
    }
    
}