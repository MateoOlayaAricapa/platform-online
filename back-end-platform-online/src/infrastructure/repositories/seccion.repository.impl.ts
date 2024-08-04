import { SeccionDatasource } from "../../domain/datasource";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { SeccionEntity } from "../../domain/entities";
import { SeccionRepository } from "../../domain/repository";

export class SeccionRepositoryImpl implements SeccionRepository {

    constructor(
        private readonly datasource: SeccionDatasource,
    ){}
    
    deleteSeccion(idSeccion: number): Promise<String> {
        return this.datasource.deleteSeccion( idSeccion );
    }
    
    deleteSecciones(idCurso: number): Promise<String> {
        return this.datasource.deleteSecciones( idCurso );
    }

    createSeccion(createSeccionDto: CreateSeccionDTO): Promise<SeccionEntity> {
        return this.datasource.createSeccion( createSeccionDto );
    }
    
    updateSeccion(updateSeccionDto: UpdateSeccionDTO): Promise<SeccionEntity> {
        return this.datasource.updateSeccion( updateSeccionDto );
    }

}