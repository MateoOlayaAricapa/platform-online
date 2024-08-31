import { prisma } from "../../../../../src/data/postgres"

export const getFormacionTest = async(): Promise<number> => {

    const formacion = await prisma.formacion.findFirst();
    return formacion!.id_formacion;

}