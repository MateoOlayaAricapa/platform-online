import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../DTOs";
import { UsuarioEntity } from "../entities";

export abstract class UsuarioDatasource {

    abstract createUser( createUserDto: RegisterUserDTO ): Promise<UsuarioEntity>;
    abstract getUser( loginUserDto: LoginUserDTO ): Promise<UsuarioEntity>;
    abstract getUserById( id: number ): Promise<UsuarioEntity>;
    abstract updateUser( updateUserDto: UpdateUserDTO ): Promise<UsuarioEntity>;
    abstract deleteUser( id: number ): Promise<String>;
    abstract isUserAlreadyRegistered( loginUserDto: LoginUserDTO ): Promise<boolean>;

}