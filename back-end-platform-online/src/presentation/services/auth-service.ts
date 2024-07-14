import { PrismaClient } from "@prisma/client";
import { LoginUserDTO } from "../../domain/DTOs";

export class AuthService {

    constructor(
        public readonly prisma: PrismaClient
    ){}

    public async loginUser( loginDto: LoginUserDTO ) {
        
        //this.prisma.usuario.findUnique

        return {
            user: loginDto
        }

    }

}