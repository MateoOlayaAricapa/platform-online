import { prisma } from "../../../../../src/data/postgres"

export const updateFormacionesTest = async( id_course: number ) => {

    await prisma.formacion.updateMany({
        where: {
            id_curso: id_course,
        },
        data: {
            deletedAt: false,
        },
    });

}

export const updateFormacionTest = async( id_formacion: number ) => {

    await prisma.formacion.update({
        where: {
            id_formacion: id_formacion,
        },
        data: {
            deletedAt: false,
        },
    });

}