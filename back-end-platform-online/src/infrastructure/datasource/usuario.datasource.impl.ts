import { prisma } from "../../data/postgres";
import { UsuarioDatasource } from "../../domain/datasource";
import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../domain/DTOs";
import { UsuarioEntity } from "../../domain/entities";

export class UsuarioDatasourceImpl implements UsuarioDatasource {
    
    async deleteUser(id: number): Promise<String> {
        
        await this.getUserById( id );

        await prisma.usuario.update({
            where: {
                id_usuario: id,
                deletedAt: false
            },
            data: {
                deletedAt: true
            }
        });
        
        return 'Usuario eliminado';

    }
    
    async isUserAlreadyRegistered( loginUserDto: LoginUserDTO ): Promise<boolean> {
        
        const usuario = await prisma.usuario.findUnique({
            where: {
                correo: loginUserDto.email,
            }
        });

        if ( !usuario ) return false;

        return true;

    }
    
    async createUser( createUserDto: RegisterUserDTO ): Promise<UsuarioEntity> {
        
        const usuario = await prisma.usuario.create({ data: createUserDto });
        return UsuarioEntity.fromObject( usuario );

    }
    
    async getUserById( id: number ): Promise<UsuarioEntity> {
        
        const usuario = await prisma.usuario.findUnique({
            where: {
                id_usuario: id,
                deletedAt: false
            }
        });

        if ( !usuario ) throw 'Usuario no encontrado';

        return UsuarioEntity.fromObject( usuario );

    }
    
    async updateUser( updateUserDto: UpdateUserDTO ): Promise<UsuarioEntity> {
        
        await this.getUserById( updateUserDto.id );

        const usuario = await prisma.usuario.update({
            where: {
                id_usuario: updateUserDto.id
            },
            data: updateUserDto.valuesToUpdate
        });

        return UsuarioEntity.fromObject( usuario );

    }

    async getUser( loginUserDto: LoginUserDTO ): Promise<UsuarioEntity> {
       
        const usuario = await prisma.usuario.findUnique({
            where: {
                correo: loginUserDto.email,
                deletedAt: false
            }
        });

        if ( !usuario ) throw 'Correo o contraseña incorrecto';

        return UsuarioEntity.fromObject( usuario! );
        
    }

}