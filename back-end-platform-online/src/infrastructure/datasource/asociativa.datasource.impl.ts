import { prisma } from "../../data/postgres";
import { AsociativaDatasource } from "../../domain/datasource";
import { CreateCourseTopicDTO, CreateUserCourseDTO, UpdateUserCourseDTO } from "../../domain/DTOs";
import { CursoTemaEntity, UsuarioCursoEntity } from "../../domain/entities";

export class AsociativaDatasourceImpl implements AsociativaDatasource {

    //* Entidad usuario_curso
    async getUsuarioCursoById( id: number ): Promise<UsuarioCursoEntity> {
        
        const usuario_curso = await prisma.usuario_curso.findUnique({
            where: {
                id_usuario_curso: id,
                deletedAt: false,
            },
        });

        if ( !usuario_curso ) throw 'Usuario_curso no encontrado';

        return UsuarioCursoEntity.fromObject( usuario_curso );

    }

    async updateUsuarioCurso( updateUserCourseDto: UpdateUserCourseDTO ): Promise<UsuarioCursoEntity> {
        
        await this.getUsuarioCursoById( updateUserCourseDto.id_usuario_curso );

        const usuario_curso = await prisma.usuario_curso.update({
            where: {
                id_usuario_curso: updateUserCourseDto.id_usuario_curso
            },
            data: updateUserCourseDto.valuesToUpdate
        });

        return UsuarioCursoEntity.fromObject( usuario_curso );

    }

    async deleteUsuarioCurso( id: number ): Promise<string> {
        
        await this.getUsuarioCursoById( id );

        await prisma.usuario_curso.update({
            where: {
                id_usuario_curso: id,
            },
            data: {
                deletedAt: true,
            },
        });

        return 'Usuario_curso eliminado';
        
    }
    
    async createUsuarioCurso( createUserCourseDto: CreateUserCourseDTO ): Promise<UsuarioCursoEntity> {
        
        const usuario_curso = await prisma.usuario_curso.create({
            data: { ...createUserCourseDto }
        });

        return UsuarioCursoEntity.fromObject( usuario_curso );

    }

    //* Entidad curso_tema
    async getCursoTemaById( id: number ): Promise<CursoTemaEntity> {
        
        const curso_tema = await prisma.curso_tema.findUnique({
            where: {
                id_curso_tema: id,
                deletedAt: false
            }
        });

        if ( !curso_tema ) throw 'Curso-tema no encontrado';

        return CursoTemaEntity.fromObject( curso_tema );

    }
    
    async createCursoTema( createCoursesTopicsDto: CreateCourseTopicDTO[] ): Promise<string> {
        
        const { count } = await prisma.curso_tema.createMany({
            data: createCoursesTopicsDto,
        });

        if ( count === 0 ) throw 'Problemas al crear curso-temas';

        return 'Curso-temas creados';

    }

    async deleteCursoTema( id: number ): Promise<string> {

        await this.getCursoTemaById( id );

        await prisma.curso_tema.update({
            where: {
                id_curso_tema: id,
            },
            data: {
                deletedAt: true,
            },
        });

        return 'Curso-tema eliminado del curso';

    }

    async deleteCursoTemaAll( idCurso: number ): Promise<string> {
        
        const { count } = await prisma.curso_tema.updateMany({
            where: {
                id_curso: idCurso,
                deletedAt: false,
            },
            data: {
                deletedAt: true,
            },
        });

        if ( count === 0 ) throw 'Curso-temas no encontrados para el curso';

        return 'Curso-temas eliminados';

    }
    
}