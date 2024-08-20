interface LoginUserParams {
    email   : string;
    password: string;
}

type LoginReturn = {
    error?      : string;
    loginUser?  : LoginUserDTO;
}

export class LoginUserDTO {

    public readonly email   : string;
    public readonly password: string;

    private constructor( options: LoginUserParams ){
        const { email, password } = options;
        this.email = email;
        this.password = password;
    }

    static login( reqBody: {[key: string]: any} ): LoginReturn {

        const { email, password } = reqBody;

        if ( !email ) return { error: 'El atributo [email] está vacío' }
        if ( !password ) return { error: 'El atributo [password] está vacío' }

        return { 
            loginUser: new LoginUserDTO({ email, password }),
        }

    }

}