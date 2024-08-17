import { RequisitoDatasource } from "../../domain/datasource";
import { CreateRequisitoDTO, UpdateRequisitoDTO } from "../../domain/DTOs";
import { RequisitoEntity } from "../../domain/entities";
import { RequisitoRepository } from "../../domain/repository";

export class RequisitoRepositoryImpl implements RequisitoRepository {

    constructor(
        private readonly datasource: RequisitoDatasource,
    ){}

    getById( id: number ): Promise<RequisitoEntity> {
        throw new Error("Method not implemented.");
    }

    create( createRequisitosDto: CreateRequisitoDTO[] ): Promise<string> {
        return this.datasource.create( createRequisitosDto );
    }

    update( updateRequisitoDto: UpdateRequisitoDTO ): Promise<RequisitoEntity> {
        return this.datasource.update( updateRequisitoDto );
    }

    delete( idRequisito: number ): Promise<string> {
        return this.datasource.delete( idRequisito );
    }

    deleteAll( idCurso: number ): Promise<string> {
        return this.datasource.deleteAll( idCurso );
    }

}