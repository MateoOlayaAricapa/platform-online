import { CreateSeccionDTO, UpdateSeccionDTO } from "../DTOs";
import { SeccionEntity } from "../entities";

export abstract class SeccionDatasource {

    abstract create( createSeccionDto: CreateSeccionDTO ): Promise<SeccionEntity>;
    abstract update( updateSeccionDto: UpdateSeccionDTO ): Promise<SeccionEntity>;
    abstract deleteAll( idCurso: number ): Promise<string>;
    abstract delete( idSeccion: number ): Promise<string>;
    abstract getById( id: number ): Promise<SeccionEntity>;

}