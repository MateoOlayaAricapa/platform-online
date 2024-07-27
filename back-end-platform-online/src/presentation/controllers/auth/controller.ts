import { Request, Response } from "express";
import { AuthService } from "../../services";
import { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../../domain/DTOs";
import { handleError } from "../../../domain/errors";

export class AuthController {

    constructor(
        public readonly authService: AuthService
    ){}

    public login = ( req: Request, res: Response ) => {

        const { error, loginUser } = LoginUserDTO.login({ ...req.body });
        if ( error ) return res.status( 400 ).json( error );

        this.authService.loginUser( loginUser! )
            .then( user => res.json({ message: 'success', data: { ...user } }) )
            .catch( error => handleError( error, res ) )

    }

    public register = ( req: Request, res: Response ) => {

        const { error, registerUser } = RegisterUserDTO.create({ ...req.body });
        if ( error ) return res.status( 400 ).json( error );

        this.authService.registerUser( registerUser! )
            .then( user => res.json({ message: 'success', data: { ...user } }) )
            .catch( error => handleError( error, res ) );

    }

    public update = ( req: Request, res: Response ) => {

        const { user } = req.body;
        
        const { error, updateUser } = UpdateUserDTO.update({ ...req.body, id: user.id_usuario });
        if ( error ) return res.status( 400 ).json( error );

        this.authService.updateUser( updateUser! )
            .then( user => res.json({ message: 'success', data: { ...user } }) )
            .catch( error => handleError( error, res ) );

    }

    public delete = ( req: Request, res: Response ) => {

        const { user } = req.body;

        this.authService.deleteUser( parseInt( user.id_usuario ) )
            .then( response => res.json({ message: 'success', data: { ...response } }) )
            .catch( err => handleError( err, res ) )

    }

}