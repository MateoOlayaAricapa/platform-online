import { prisma } from "../../../../../src/data/postgres"
import { CursoEntity } from "../../../../../src/domain/entities";

export const getCourseTest = async() => {
    const courses    = await prisma.curso.findMany();
    const courseTest = courses.find( course => course.titulo === 'Titulo curso 1' );

    return CursoEntity.fromObject({ ...courseTest });
}