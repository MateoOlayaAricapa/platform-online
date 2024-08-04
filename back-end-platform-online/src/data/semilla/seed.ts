import { prisma } from "../data/postgres";
import { seedData } from "./data";

( async() => {

    await main();

})();

type Topics = {
    id_tema: number;
    nombre: string;
    createdAt: Date;
    deletedAt: boolean;
}

const randomTopics = ( id_curso: number, topics: Topics[] ) => {

    let index1 = Math.floor( Math.random() * (2 + 1) );
    let index2;

    do {

        index2 = Math.floor( Math.random() * (2 + 1) );

    } while ( index1 === index2 );

    return [
        { id_curso, id_tema: topics[index1]['id_tema'] },
        { id_curso, id_tema: topics[index2]['id_tema'] }
    ];

}

async function main() {

    try {
        
        //* Borrando todos los datos si existen la base de datos prueba
        await Promise.all([
            prisma.usuario_curso.deleteMany(),
            prisma.usuario.deleteMany(),
            prisma.formacion.deleteMany(),
            prisma.requisito.deleteMany(),
            prisma.curso_tema.deleteMany(),
            prisma.tema.deleteMany(),
            prisma.clase.deleteMany(),
            prisma.seccion.deleteMany(),
            prisma.curso.deleteMany(),
        ]);

        let id_cursos = [];
        const { courses, topics, users } = seedData;
    
        //* 01. Creando usuarios
        const new_users = await prisma.usuario.createManyAndReturn({
            data: users,
        });

        //* 02. Creando temas
        const temas = await prisma.tema.createManyAndReturn({
            data: topics
        });

        //* 03. Creando cursos
        for( let course of courses ) {

            const { formacion, secciones, requisitos, ...courseBD } = course;

            const { id_curso } = await prisma.curso.create({
                data: courseBD
            });

            id_cursos.push( id_curso ); 

            //* 04. Creando usuario_curso
            await prisma.usuario_curso.create({
                data: {
                    estaCompletado: false,
                    rol: 'instructor',
                    id_curso: id_curso,
                    id_usuario: new_users[0].id_usuario
                }
            });

            //* 05. Creando requisitos
            const newRequisitos = requisitos.map( requisito => ({ ...requisito, id_curso }) );
            
            await prisma.requisito.createMany({
                data: newRequisitos
            });

            //* 06. Creando formación
            const newFormacion = formacion.map(item => ( { ...item, id_curso } ));

            await prisma.formacion.createMany({
                data: newFormacion
            });

            //* 07. Creando curso_tema
            await prisma.curso_tema.createMany({
                data: randomTopics( id_curso, temas ),
            });

            //* 08. Creando secciones con sus clases
            const newSecciones = secciones.map( seccion => ({ ...seccion, id_curso }) );
            
            for( let seccion of newSecciones ) {
                const { clases, ...seccionBD } = seccion;
                
                const result = await prisma.seccion.create({
                    data: seccionBD
                });

                const newClases = clases.map( clase => ({ ...clase, id_seccion: result.id_seccion }) );
                await prisma.clase.createMany({
                    data: newClases
                });
            }

        }

        //* Creando un usuario con rol estudiante
        await prisma.usuario_curso.create({
            data: {
                estaCompletado: false,
                rol: 'estudiante',
                id_curso: id_cursos[0],
                id_usuario: new_users[1].id_usuario
            }
        });

        console.log('Se insertaron los datos');

    } catch (error) {
        console.log(`Error al insertar datos: ${ error }`);
    }
    
}