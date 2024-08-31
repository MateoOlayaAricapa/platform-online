import { prisma } from "../../src/data/postgres"

export const getCourseTest = async(): Promise<number> => {
    const course = await prisma.curso.findFirst();
    return course!.id_curso;
}