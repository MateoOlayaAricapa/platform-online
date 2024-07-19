import {  compareSync, genSaltSync, hashSync } from 'bcryptjs';

export class BcriptAdapter {

    public static hash( password: string ): string {
        const salt = genSaltSync();
        return hashSync( password, salt );
    }

    public static compare( password: string, passwordHash: string ): boolean {
        return compareSync( password, passwordHash );
    }

}