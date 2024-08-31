import { prisma } from "../../../../../src/data/postgres"

export const deleteSeccionTest = async( id_seccion: number ): Promise<void> => {

    await prisma.seccion.delete({
        where: {
            id_seccion: id_seccion,
        },
    });

}