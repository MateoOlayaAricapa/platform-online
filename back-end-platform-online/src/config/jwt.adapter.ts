import jwt from 'jsonwebtoken';

export class JWTAdapter {

    static async generateToken( payload: { [key: string]: any }, duration: string = '2h', SEED: string ) {

        return new Promise((resolve) => {

            jwt.sign( payload, SEED, { expiresIn: duration }, ( error, token ) => {

                if ( error ) return resolve( null );

                return resolve( token );

            } );

        });

    }

    static async validateToken<T>( token: string, SEED: string ): Promise<T | null> {

        return new Promise((resolve) =>{

            jwt.verify( token, SEED, ( error, decoded ) => {

                if ( error ) return resolve(null);

                return resolve( decoded as T );

            } );

        });

    }

}