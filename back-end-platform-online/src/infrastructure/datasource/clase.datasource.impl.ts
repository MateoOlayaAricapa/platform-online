import { prisma } from "../../data/postgres";
import { ClaseDatasource } from "../../domain/datasource";
import { CreateClaseDTO, UpdateClaseDTO } from "../../domain/DTOs";
import { ClaseEntity } from "../../domain/entities";

export class ClaseDatasourceImpl implements ClaseDatasource {
    
    async getById( id: number ): Promise<ClaseEntity> {
        
        const clase = await prisma.clase.findUnique({
            where: {
                id_clase: id,
                deletedAt: false
            }
        });

        if ( !clase ) throw 'Clase no encontrada';

        return ClaseEntity.fromObject( clase );

    }
    
    async create( createClasesDto: CreateClaseDTO[] ): Promise<string> {
        
        const clases = await prisma.clase.createManyAndReturn({
            data: createClasesDto,
        });

        if ( clases.length === 0 ) throw 'Problema al crear las clases';

        return 'Clases creadas para la sección';

    }
    
    async update( updateClaseDto: UpdateClaseDTO ): Promise<ClaseEntity> {
        
        await this.getById( updateClaseDto.id_clase );

        const clase = await prisma.clase.update({
            where: {
                id_clase: updateClaseDto.id_clase
            },
            data: { ...updateClaseDto.valuesToUpdate }
        });

        return ClaseEntity.fromObject( clase );

    }
    
    async delete( id: number ): Promise<string> {
        
        await this.getById( id );

        await prisma.clase.update({
            where: {
                id_clase: id,
            },
            data: {
                deletedAt: true,
            },
        });
        
        return 'Clase eliminada de la sección';

    }

    async deleteAll( idSeccion: number ): Promise<string> {
        
        const { count } = await prisma.clase.updateMany({
            where: {
                id_seccion: idSeccion,
                deletedAt: false,
            },
            data: {
                deletedAt: true,
            },
        });

        if ( count === 0 ) throw 'Clases no encontradas para la sección';

        return 'Eliminada todas las clases de la sección';

    }

}