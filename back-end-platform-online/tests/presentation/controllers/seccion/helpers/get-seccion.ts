import { prisma } from "../../../../../src/data/postgres"

export const getSeccionTest = async(): Promise<number> => {
    const seccion = await prisma.seccion.findFirst();
    return seccion!.id_seccion;
}