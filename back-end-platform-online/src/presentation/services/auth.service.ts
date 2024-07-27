import { BcriptAdapter, envs, JWTAdapter } from "../../config";
import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../domain/DTOs";
import { CustomError } from "../../domain/errors";
import { UsuarioRepository } from "../../domain/repository";

export class AuthService {

    constructor(
        private readonly usuarioRepository: UsuarioRepository,
    ){}

    public async loginUser( loginDto: LoginUserDTO ) {

        try {

            const { contrasena: password, id_usuario, ...usuarioEntity } = await this.usuarioRepository.getUser( loginDto );
            
            //* Verificando si las contraseñas son diferentes
            if ( !BcriptAdapter.compare( loginDto.password, password ) ) throw CustomError.badRequest('Correo o contraseña incorrecto');

            const token = await JWTAdapter.generateToken( { id: id_usuario }, '2h', envs.SEED );
            if ( !token ) throw CustomError.internalServer('Error generando token');

            return {
                user: usuarioEntity,
                token
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async registerUser( registerDto: RegisterUserDTO ) {

        try {

            const { contrasena: password, correo: email } = registerDto;
            const isRegistered = await this.usuarioRepository.isUserAlreadyRegistered({ email, password });
            if ( isRegistered ) throw CustomError.badRequest('El correo ya está registrado');

            //* Encriptando contraseña.
            registerDto.contrasena = BcriptAdapter.hash( password );

            //* Guardando usuario.
            const { contrasena, id_usuario, ...userEntity } = await this.usuarioRepository.createUser( registerDto );

            const token = await JWTAdapter.generateToken( { id: id_usuario }, '2h', envs.SEED );
            if ( !token ) throw CustomError.internalServer('Error generando token');

            return {
                user: { ...userEntity },
                token
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async updateUser( updateDto: UpdateUserDTO ) {

        try {

            //* Verificando si hay al menos un valor a actualizar.
            if ( updateDto.nothingToUpdate ) throw CustomError.badRequest('No hay valores a actualizar');
            
            //* Encriptando contraseña si se va actualizar únicamente.
            if ( updateDto.passwordToUpdate ) { updateDto.contrasena = BcriptAdapter.hash( updateDto.contrasena! ) };

            const { contrasena, id_usuario, ...usuarioUpdate } = await this.usuarioRepository.updateUser( updateDto );

            return {
                user: ( updateDto.passwordToUpdate ) ? { message: 'Contraseña actualizada' } : { ...usuarioUpdate }
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

    public async deleteUser( id: number ) {

        try {
            
            const result = await this.usuarioRepository.deleteUser( id );

            return {
                status: result
            }

        } catch (error) {
            throw CustomError.internalServer(`${ error }`);
        }

    }

}