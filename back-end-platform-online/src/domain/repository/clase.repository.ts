import { CreateClaseDTO, UpdateClaseDTO } from "../DTOs";
import { ClaseEntity } from "../entities";

export abstract class ClaseRepository {

    abstract getById( id: number ): Promise<ClaseEntity>;
    abstract create( createClaseDto: CreateClaseDTO ): Promise<ClaseEntity>;
    abstract update( updateClaseDto: UpdateClaseDTO ): Promise<ClaseEntity>;
    abstract delete( id: number ): Promise<string>;
    abstract deleteAll( idSeccion: number ): Promise<string>;

}