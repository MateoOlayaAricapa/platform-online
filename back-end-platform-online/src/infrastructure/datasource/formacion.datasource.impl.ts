import { prisma } from "../../data/postgres";
import { FormacionDatasource } from "../../domain/datasource";
import { CreateFormacionDTO, UpdateFormacionDTO } from "../../domain/DTOs";
import { FormacionEntity } from "../../domain/entities";

export class FormacionDatasourceImpl implements FormacionDatasource {
    
    async getById( id: number ): Promise<FormacionEntity> {
        
        const formacion = await prisma.formacion.findUnique({
            where: {
                id_formacion: id,
                deletedAt: false
            }
        });

        if ( !formacion ) throw 'No se encontró formación';
        
        return FormacionEntity.fromObject( formacion );

    }
    
    async create( createFormacionesDto: CreateFormacionDTO[] ): Promise<FormacionEntity[]> {
        
        const formaciones = await prisma.formacion.createManyAndReturn({
            data: createFormacionesDto
        });

        if ( !formaciones ) throw 'Problemas al crear formaciones del curso';

        return FormacionEntity.fromObjects( formaciones );

    }

    async update( updateFormacionDto: UpdateFormacionDTO ): Promise<FormacionEntity> {
        
        await this.getById( updateFormacionDto.id );

        const formacion = await prisma.formacion.update({
            where: {
                id_formacion: updateFormacionDto.id
            },
            data: updateFormacionDto.valuesToUpdate
        });

        return FormacionEntity.fromObject( formacion );

    }

    async delete( idFormacion: number ): Promise<string> {
        
        await this.getById( idFormacion );

        await prisma.formacion.update({
            where: {
                id_formacion: idFormacion,
                deletedAt: false,
            },
            data: {
                deletedAt: true,
            },
        });

        return 'Formación borrada del curso';

    }

    async deleteAll( idCurso: number ): Promise<string> {
        
        const { count } = await prisma.formacion.updateMany({
            where: {
                id_curso: idCurso,
                deletedAt: false,
            },
            data: {
                deletedAt: true,
            },
        });

        if ( count === 0 ) throw 'Formaciones no encontradas del curso';

        return 'Formaciones eliminadas del curso';

    }

}