import { CreateRequisitoDTO, UpdateRequisitoDTO } from "../DTOs";
import { RequisitoEntity } from "../entities";

export abstract class RequisitoDatasource {

    abstract getById( id: number ): Promise<RequisitoEntity>;
    abstract create( createRequisitosDto: CreateRequisitoDTO[] ): Promise<string>;
    abstract update( updateRequisitoDto: UpdateRequisitoDTO ): Promise<RequisitoEntity>;
    abstract delete( idRequisito: number ): Promise<string>;
    abstract deleteAll( idCurso: number ): Promise<string>;

}