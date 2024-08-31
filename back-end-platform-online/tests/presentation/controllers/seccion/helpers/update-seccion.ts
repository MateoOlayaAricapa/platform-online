import { prisma } from "../../../../../src/data/postgres"

export const updateSeccionesCurso = async( id_curso: number ): Promise<void> => {

    await prisma.seccion.updateMany({
        where: {
            id_curso: id_curso,
        },
        data: {
            deletedAt: false,
        },
    });

}

export const updateSeccion = async( id_seccion: number ): Promise<void> => {

    await prisma.seccion.update({
        where: {
            id_seccion: id_seccion,
        },
        data: {
            deletedAt: false,
        },
    });

}