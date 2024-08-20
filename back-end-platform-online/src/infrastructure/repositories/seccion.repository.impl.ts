import { SeccionDatasource } from "../../domain/datasource";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { SeccionEntity } from "../../domain/entities";
import { SeccionRepository } from "../../domain/repository";

export class SeccionRepositoryImpl implements SeccionRepository {

    constructor(
        private readonly datasource: SeccionDatasource,
    ){}
    
    delete( idSeccion: number ): Promise<string> {
        return this.datasource.delete( idSeccion );
    }
    
    deleteAll( idCurso: number ): Promise<string> {
        return this.datasource.deleteAll( idCurso );
    }

    create( createSeccionDto: CreateSeccionDTO ): Promise<SeccionEntity> {
        return this.datasource.create( createSeccionDto );
    }
    
    update( updateSeccionDto: UpdateSeccionDTO ): Promise<SeccionEntity> {
        return this.datasource.update( updateSeccionDto );
    }

}