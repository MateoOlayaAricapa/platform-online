import { CreateTemaDTO, UpdateTemaDTO } from "../DTOs";
import { TemaEntity } from "../entities";

export abstract class TemaRepository {

    abstract create( createTemasDto: CreateTemaDTO[] ): Promise<string>;
    abstract getById( id: number ): Promise<TemaEntity>;
    abstract update( updateTemaDto: UpdateTemaDTO ): Promise<TemaEntity>;
    abstract delete( id: number ): Promise<string>;

}