import { CreateTemaDTO, UpdateTemaDTO } from "../DTOs";
import { TemaEntity } from "../entities";

export abstract class TemaDatasource {

    abstract create( createTemasDto: CreateTemaDTO[] ): Promise<string>;
    abstract getById( id: number ): Promise<TemaEntity>;
    abstract isCreate( createTemasDto: CreateTemaDTO[] ): Promise<string | undefined>;
    abstract update( updateTemaDto: UpdateTemaDTO ): Promise<TemaEntity>;
    abstract delete( id: number ): Promise<string>;

}