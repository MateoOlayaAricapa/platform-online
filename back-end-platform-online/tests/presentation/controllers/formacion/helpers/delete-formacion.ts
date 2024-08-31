import { prisma } from "../../../../../src/data/postgres"

export const deleteFormacion = async( id_formacion: number ): Promise<void> => {
    
    await prisma.formacion.delete({
        where: {
            id_formacion: id_formacion,
        },
    });

}