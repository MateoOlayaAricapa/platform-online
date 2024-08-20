import { prisma } from "../../data/postgres";
import { RequisitoDatasource } from "../../domain/datasource";
import { CreateRequisitoDTO, UpdateRequisitoDTO } from "../../domain/DTOs";
import { RequisitoEntity } from "../../domain/entities";

export class RequisitoDatasourceImpl implements RequisitoDatasource {
    
    async getById(  id: number ): Promise<RequisitoEntity> {
        
        const requisito = await prisma.requisito.findUnique({
            where: {
                id_requisito: id,
                deletedAt: false,
            },
        });

        if ( !requisito ) throw 'Requisito no encontrado';
        
        return RequisitoEntity.fromObject( requisito );

    }
    
    async create( createRequisitosDto: CreateRequisitoDTO[] ): Promise<string> {
        
        const requisitos = await prisma.requisito.createManyAndReturn({
            data: createRequisitosDto,
        });

        if ( requisitos.length === 0 ) throw 'Problema al crear requisitos del curso';

        return 'Requisitos creados del curso';

    }
    
    async update( updateRequisitoDto: UpdateRequisitoDTO ): Promise<RequisitoEntity> {
        
        await this.getById( updateRequisitoDto.id );

        const requisito = await prisma.requisito.update({
            where: {
                id_requisito: updateRequisitoDto.id,
            },
            data: updateRequisitoDto.valuesToUpdate,
        });

        return RequisitoEntity.fromObject( requisito );

    }
    
    async delete( idRequisito: number ): Promise<string> {
        
        await this.getById( idRequisito );

        await prisma.requisito.update({
            where: {
                id_requisito: idRequisito,
                deletedAt: false,
            },
            data: {
                deletedAt: true,
            },
        });

        return 'Requisito eliminado';

    }
    
    async deleteAll( idCurso: number ): Promise<string> {
        
        const { count } = await prisma.requisito.updateMany({
            where: {
                id_curso: idCurso,
                deletedAt: false,
            },
            data: {
                deletedAt: true,
            },
        });

        if ( count === 0 ) throw 'Requisitos no encontrados para el curso';

        return 'Requisitos eliminados del curso';

    }

}