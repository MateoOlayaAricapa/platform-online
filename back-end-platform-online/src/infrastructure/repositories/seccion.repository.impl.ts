import { SeccionDatasource } from "../../domain/datasource";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { SeccionEntity } from "../../domain/entities";
import { SeccionRepository } from "../../domain/repository";

export class SeccionRepositoryImpl implements SeccionRepository {

    constructor(
        private readonly datasource: SeccionDatasource,
    ){}
    
    deleteSeccion(idCurso: number): Promise<String> {
        return this.datasource.deleteSeccion( idCurso );
    }

    createSeccion(createSeccionDto: CreateSeccionDTO): Promise<SeccionEntity> {
        return this.datasource.createSeccion( createSeccionDto );
    }
    
    updateSeccion(updateSeccionDto: UpdateSeccionDTO): Promise<SeccionEntity> {
        return this.datasource.updateSeccion( updateSeccionDto );
    }

}