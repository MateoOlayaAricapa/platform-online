import { prisma } from "../../data/postgres";
import { CursoDatasource } from "../../domain/datasource";
import { CreateCourseDTO, GetAllCoursesDTO, UpdateCourseDTO } from "../../domain/DTOs";
import { AllCursosEntity, CursoEntity } from "../../domain/entities";

export class CursoDataSourceImpl implements CursoDatasource {
    
    async isCursoExist(id: number): Promise<boolean> {
        
        const curso = await prisma.curso.findUnique({
            where: {
                id_curso: id,
                deletedAt: false
            }
        });

        if ( !curso ) throw 'Curso no encontrado';

        return true;

    }
    
    async deleteCurso( id: number ): Promise<string> {
        
        await this.isCursoExist( id );

        await prisma.curso.update({
            where: {
                id_curso: id
            },
            data: {
                deletedAt: true
            }
        });

        return 'Curso eliminado';

    }
    
    async getCursoById( id: number ): Promise<any> {
        
        const curso = await prisma.curso.findUnique({
            where: {
                id_curso: id,
                deletedAt: false
            },
            include: {
                usuarioCurso: {
                    select: {
                        usuario: {
                            select: {
                                apellido: true,
                                nombre: true,
                                sobremi: true,
                                profesion: true,
                                foto_url: true
                            }
                        }
                    }
                },
                formacion: {
                    select: {
                        contenido: true
                    }
                },
                requisito: {
                    select: {
                        contenido: true
                    }
                },
                seccion: {
                    select: {
                        titulo: true,
                        total_tiempo: true,
                        clase: {
                            select: {
                                titulo: true,
                                tiempo: true,
                                url_contenido: true,
                                tipo: true,
                                estaCompletado: true
                            }
                        }
                    }
                },
                cursoTema: {
                    select: {
                        tema: {
                            select: {
                                nombre: true
                            }
                        }
                    }
                }
            }
        });

        if ( !curso ) throw 'Curso no encontrado';

        return curso;

    }
    
    async updateCurso( updateCourseDto: UpdateCourseDTO ): Promise<CursoEntity> {
        
        await this.isCursoExist( updateCourseDto.id );

        const curso = await prisma.curso.update({
            where: {
                id_curso: updateCourseDto.id
            },
            data: { ...updateCourseDto.valuesToUpdate }
        });

        return CursoEntity.fromObject( curso );

    }

    async createCurso( createCourseDto: CreateCourseDTO ): Promise<CursoEntity> {
        
        const curso = await prisma.curso.create({
            data: createCourseDto
        });

        return CursoEntity.fromObject( curso );

    }

    async getCursos( getAllCoursesDto: GetAllCoursesDTO ): Promise<AllCursosEntity[]> {
        
        const { idUsuario, type } = getAllCoursesDto;

        const cursos = await prisma.curso.findMany({
            where: {
                deletedAt: false,
                usuarioCurso: {
                    some: {
                        id_usuario: idUsuario,
                        rol: type
                    }
                }
            },
            select: {
                usuarioCurso: {
                    select: {
                        id_usuario_curso: true,
                        estaCompletado: true,
                        rol: true,
                        usuario: {
                            select: {
                                apellido: true,
                                nombre: true
                            }
                        }
                    },
                    where: {
                        id_usuario: idUsuario,
                        rol: type
                    }
                },
                id_curso: true,
                descripcion: true,
                total_clases: true,
                total_secciones: true,
                total_tiempo: true,
                imagen_url: true,
                titulo: true
            }
        });

        return cursos.map( curso => AllCursosEntity.fromObject( curso ) )

    }

    //TODO: implementar el JWT para este endpoint

}

