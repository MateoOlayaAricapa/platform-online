import { CreateClaseDTO, UpdateClaseDTO } from "../DTOs";
import { ClaseEntity } from "../entities";

export abstract class ClaseDatasource {

    abstract getById( id: number ): Promise<ClaseEntity>;
    abstract create( createClaseDto: CreateClaseDTO[] ): Promise<string>;
    abstract update( updateClaseDto: UpdateClaseDTO ): Promise<ClaseEntity>;
    abstract delete( id: number ): Promise<string>;
    abstract deleteAll( idSeccion: number ): Promise<string>;

}