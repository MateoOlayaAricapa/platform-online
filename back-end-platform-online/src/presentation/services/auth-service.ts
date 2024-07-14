import { LoginUserDTO } from "../../domain/DTOs";

export class AuthService {

    constructor(){}

    public async loginUser( loginDto: LoginUserDTO ) {
        
        return {
            user: loginDto
        }

    }

}