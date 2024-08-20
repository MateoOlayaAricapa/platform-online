import { Request, Response } from "express";
import { AuthService } from "../../services";
import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../../domain/DTOs";
import { handleError, handleErrorDTO } from "../../../domain/errors";
import { handleResponse } from "../../../domain/responses-http";

export class AuthController {

    constructor(
        public readonly authService: AuthService
    ){}

    public login = ( req: Request, res: Response ) => {

        const { error, loginUser } = LoginUserDTO.login({ ...req.body });
        if ( error ) return handleErrorDTO( error, res );

        this.authService.loginUser( loginUser! )
            .then( user => handleResponse( res, user ) )
            .catch( error => handleError( error, res ) )

    }

    public register = ( req: Request, res: Response ) => {

        const { error, registerUser } = RegisterUserDTO.create({ ...req.body });
        if ( error ) return handleErrorDTO( error, res );

        this.authService.registerUser( registerUser! )
            .then( user => handleResponse( res, user ) )
            .catch( error => handleError( error, res ) );

    }

    public update = ( req: Request, res: Response ) => {

        const { user } = req.body;
        
        const { error, updateUser } = UpdateUserDTO.update({ ...req.body, id: user.id_usuario });
        if ( error ) return handleErrorDTO( error, res );

        this.authService.updateUser( updateUser! )
            .then( user => handleResponse( res, user ) )
            .catch( error => handleError( error, res ) );

    }

    public delete = ( req: Request, res: Response ) => {

        const { user } = req.body;

        this.authService.deleteUser( parseInt( user.id_usuario ) )
            .then( result => handleResponse( res, result ) )
            .catch( error => handleError( error, res ) )

    }

}