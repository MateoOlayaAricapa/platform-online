import { prisma } from "../../../../../src/data/postgres";
import { CursoEntity } from "../../../../../src/domain/entities";

export const updateCourseTest = async( course: CursoEntity ): Promise<void> => {

    await prisma.curso.update({
        where: {
            id_curso: course.id_curso
        },
        data: {
            descripcion     : course.descripcion,
            total_secciones : course.total_secciones,
            deletedAt       : false,
        },
    });

}