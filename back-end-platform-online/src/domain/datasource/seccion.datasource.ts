import { CreateSeccionDTO, UpdateSeccionDTO } from "../DTOs";
import { SeccionEntity } from "../entities";

export abstract class SeccionDatasource {

    abstract createSeccion( createSeccionDto: CreateSeccionDTO ): Promise<SeccionEntity>;
    abstract updateSeccion( updateSeccionDto: UpdateSeccionDTO ): Promise<SeccionEntity>;
    abstract deleteSeccion( idCurso: number ): Promise<String>;
    abstract getSeccionById( id: number ): Promise<SeccionEntity>;

}