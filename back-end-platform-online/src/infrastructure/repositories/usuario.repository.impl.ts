import { UsuarioDatasource } from "../../domain/datasource";
import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../domain/DTOs";
import { UsuarioEntity } from "../../domain/entities";
import { UsuarioRepository } from "../../domain/repository";

export class UsuarioRepositoryImpl implements UsuarioRepository {
    
    constructor(
        private readonly datasource: UsuarioDatasource,
    ){}
    
    deleteUser(id: number): Promise<String> {
        return this.datasource.deleteUser( id );
    }
   
    isUserAlreadyRegistered(loginUserDto: LoginUserDTO): Promise<boolean> {
        return this.datasource.isUserAlreadyRegistered( loginUserDto );
    }
    
    getUser(loginUserDto: LoginUserDTO): Promise<UsuarioEntity> {
        return this.datasource.getUser( loginUserDto );
    }

    createUser(createUserDto: RegisterUserDTO): Promise<UsuarioEntity> {
        return this.datasource.createUser( createUserDto );
    }
    
    getUserById(id: number): Promise<UsuarioEntity> {
        return this.datasource.getUserById( id );
    }
    
    updateUser(updateUserDto: UpdateUserDTO): Promise<UsuarioEntity> {
        return this.datasource.updateUser( updateUserDto );
    }

}