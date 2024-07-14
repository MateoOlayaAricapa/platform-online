import { Request, Response } from "express";
import { AuthService } from "../../services";
import { LoginUserDTO } from "../../../domain/DTOs";
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

}