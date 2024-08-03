import { ClaseDatasource } from "../../domain/datasource";
import { CreateClaseDTO, UpdateClaseDTO } from "../../domain/DTOs";
import { ClaseEntity } from "../../domain/entities";
import { ClaseRepository } from "../../domain/repository";

export class ClaseRepositoryImpl implements ClaseRepository {

    constructor(
        private readonly datasource: ClaseDatasource,
    ){}

    getById(id: number): Promise<ClaseEntity> {
        throw new Error("Method not implemented.");
    }
    
    create(createClaseDto: CreateClaseDTO): Promise<ClaseEntity> {
        return this.datasource.create( createClaseDto );
    }
    
    update(updateClaseDto: UpdateClaseDTO): Promise<ClaseEntity> {
        return this.datasource.update( updateClaseDto );
    }
    
    delete(id: number): Promise<string> {
        return this.datasource.delete( id );
    }

    deleteAll(idSeccion: number): Promise<string> {
        return this.datasource.deleteAll( idSeccion );
    }

}