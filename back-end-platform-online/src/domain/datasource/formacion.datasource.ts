import { CreateFormacionDTO, UpdateFormacionDTO } from "../DTOs";
import { FormacionEntity } from "../entities";

export abstract class FormacionDatasource {

    abstract create( createFormacionesDto: CreateFormacionDTO[] ): Promise<FormacionEntity[]>;
    abstract getById( id: number ): Promise<FormacionEntity>;
    abstract update( updateFormacionDto: UpdateFormacionDTO ): Promise<FormacionEntity>;
    abstract delete( idFormacion: number ): Promise<string>;
    abstract deleteAll( idCurso: number ): Promise<string>;

}