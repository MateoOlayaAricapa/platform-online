import { TemaDatasource } from "../../domain/datasource";
import { CreateTemaDTO, UpdateTemaDTO } from "../../domain/DTOs";
import { TemaEntity } from "../../domain/entities";
import { TemaRepository } from "../../domain/repository";

export class TemaRepositoryImpl implements TemaRepository {

    constructor(
        private readonly datasource: TemaDatasource,
    ){}

    create( createTemasDto: CreateTemaDTO[] ): Promise<string> {
        return this.datasource.create( createTemasDto );
    }
    
    getById( id: number ): Promise<TemaEntity> {
        throw new Error("Method not implemented.");
    }
    
    update( updateTemaDto: UpdateTemaDTO ): Promise<TemaEntity> {
        return this.datasource.update( updateTemaDto );
    }
    
    delete( id: number ): Promise<string> {
        return this.datasource.delete( id );
    }

}