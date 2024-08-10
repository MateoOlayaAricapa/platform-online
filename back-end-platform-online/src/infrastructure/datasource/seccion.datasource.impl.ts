import { prisma } from "../../data/postgres";
import { SeccionDatasource } from "../../domain/datasource";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { SeccionEntity } from "../../domain/entities";

export class SeccionDatasourceImpl implements SeccionDatasource {
    
    async getById( id: number ): Promise<SeccionEntity> {
        
        const seccion = await prisma.seccion.findUnique({
            where: {
                id_seccion: id,
                deletedAt: false,
            },
        });

        if ( !seccion ) throw 'Sección no encontrado';

        return SeccionEntity.fromObject( seccion );

    }

    async delete( idSeccion: number ): Promise<string> {
       
        await this.getById( idSeccion );

        await prisma.seccion.update({
            where: {
                id_seccion: idSeccion,
            },
            data: {
                deletedAt: true,
            },
        });

        return 'Sección eliminada';

    }
    
    async deleteAll( idCurso: number ): Promise<string> {
        
        const { count } = await prisma.seccion.updateMany({
            where: {
                id_curso: idCurso,
            },
            data: {
                deletedAt: true,
            },
        });

        if ( count === 0 ) throw 'Secciones no encontradas para el curso';

        return 'Secciones eliminadas';

    }
    
    async create( createSeccionDto: CreateSeccionDTO ): Promise<SeccionEntity> {
        
        const seccion = await prisma.seccion.create({
            data: createSeccionDto,
        });

        return SeccionEntity.fromObject( seccion );

    }
    
    async update( updateSeccionDto: UpdateSeccionDTO ): Promise<SeccionEntity> {
        
        await this.getById( updateSeccionDto.id );

        const seccion = await prisma.seccion.update({
            where: {
                id_seccion: updateSeccionDto.id,
            },
            data: updateSeccionDto.valuesToUpdate,
        });

        return SeccionEntity.fromObject( seccion );

    }

}