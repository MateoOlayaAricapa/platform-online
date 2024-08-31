import { BcriptAdapter } from "../../../../../src/config";
import { prisma } from "../../../../../src/data/postgres";

interface User {
    nombres     : string;
    apellidos   : string;
    correo      : string;
    contrasena  : string;
}

export class UserTest {

    static delete = async( user: User ): Promise<void> => {

        const usuario = await prisma.usuario.findFirst({
            where: {
                correo: user.correo,
            },
        });
    
        if ( usuario ) {
    
            await prisma.usuario.delete({
                where: {
                    id_usuario: usuario!.id_usuario
                },
            });
    
        }
    
    }
    
    static create = async( user: User ): Promise<void> => {
    
        const usuario = await prisma.usuario.findFirst({
            where: {
                correo: user.correo,
            },
        });

        if ( !usuario ) {

            await prisma.usuario.create({
                data: {
                    apellido    : user.apellidos,
                    contrasena  : BcriptAdapter.hash( user.contrasena ),
                    correo      : user.correo,
                    nombre      : user.nombres,
                }
            });

        }

    }

}