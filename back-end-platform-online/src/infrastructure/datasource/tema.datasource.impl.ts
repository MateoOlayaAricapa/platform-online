import { prisma } from "../../data/postgres";
import { TemaDatasource } from "../../domain/datasource";
import { CreateTemaDTO, UpdateTemaDTO } from "../../domain/DTOs";
import { TemaEntity } from "../../domain/entities";

export class TemaDatasourceImpl implements TemaDatasource {
    
    async isCreate( createTemasDto: CreateTemaDTO[] ): Promise<string | undefined> {
        
        for( let tema of createTemasDto ) {

            const { nombre } = tema;

            const result = await prisma.tema.findFirst({
                where: {
                    nombre: nombre,
                    deletedAt: false,
                },
            });

            if ( result ) return `Tema: [${ nombre }] ya existe`;

        }

    }
    
    async create( createTemasDto: CreateTemaDTO[] ): Promise<string> {
        
        const result = await this.isCreate( createTemasDto );
        if ( result ) throw `${ result }`;

        const { count } = await prisma.tema.createMany({
            data: createTemasDto,
        });

        if ( count === 0 ) throw 'Problemas al crear los temas';

        return 'Temas creados';

    }
    
    async getById( id: number ): Promise<TemaEntity> {
        
        const tema = await prisma.tema.findUnique({
            where: {
                id_tema: id,
                deletedAt: false,
            },
        });

        if ( !tema ) throw 'Tema no encontrado';

        return TemaEntity.fromObject( tema );

    }
    
    async update( updateTemaDto: UpdateTemaDTO ): Promise<TemaEntity> {
        
        await this.getById( updateTemaDto.id_tema );

        const tema = await prisma.tema.update({
            where: {
                id_tema: updateTemaDto.id_tema,
            },
            data: updateTemaDto.valuesToUpdate,
        });

        return TemaEntity.fromObject( tema );

    }
    
    async delete( id: number ): Promise<string> {
        
        await this.getById( id );

        await prisma.tema.update({
            where: {
                id_tema: id,
            },
            data: {
                deletedAt: true,
            },
        });

        return 'Tema eliminado';

    }

}