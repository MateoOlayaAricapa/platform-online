import { prisma } from "../../data/postgres";
import { SeccionDatasource } from "../../domain/datasource";
import { CreateSeccionDTO, UpdateSeccionDTO } from "../../domain/DTOs";
import { SeccionEntity } from "../../domain/entities";

export class SeccionDatasourceImpl implements SeccionDatasource {
    
    async deleteSeccion(idSeccion: number): Promise<String> {
       
        const seccion = await prisma.seccion.update({
            where: {
                id_seccion: idSeccion
            },
            data: {
                deletedAt: true
            }
        });

        if ( !seccion ) throw 'Seccion no encontrada';

        return 'Sección eliminada';

    }
    
    async deleteSecciones(idCurso: number): Promise<String> {
        
        const secciones = await prisma.seccion.updateMany({
            where: {
                id_curso: idCurso,
            },
            data: {
                deletedAt: true
            }
        });

        if ( !secciones ) throw 'Secciones no encontradas para el curso';

        return 'Secciones eliminadas';

    }
    
    async getSeccionById(id: number): Promise<SeccionEntity> {
        
        const seccion = await prisma.seccion.findUnique({
            where: {
                id_seccion: id,
                deletedAt: false
            }
        });

        if ( !seccion ) throw 'Seccion no encontrado';

        return SeccionEntity.fromObject( seccion );

    }
    
    async createSeccion(createSeccionDto: CreateSeccionDTO): Promise<SeccionEntity> {
        
        const seccion = await prisma.seccion.create({
            data: createSeccionDto
        });

        return SeccionEntity.fromObject( seccion );

    }
    
    async updateSeccion(updateSeccionDto: UpdateSeccionDTO): Promise<SeccionEntity> {
        
        await this.getSeccionById( updateSeccionDto.id );

        const seccion = await prisma.seccion.update({
            where: {
                id_seccion: updateSeccionDto.id
            },
            data: updateSeccionDto
        });

        return SeccionEntity.fromObject( seccion );

    }

}