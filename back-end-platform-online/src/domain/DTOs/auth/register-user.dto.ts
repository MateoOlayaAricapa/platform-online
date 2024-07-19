interface RegisterUserParams {
    nombre      : string;
    apellido    : string;
    correo      : string;
    contrasena  : string;
    sobremi?    : string;
    profesion?  : string;
    foto_url?   : string;
}

type registerReturn = {
    error?          : string;
    registerUser?   : RegisterUserDTO;
}

export class RegisterUserDTO {
    
    public readonly nombre      : string;
    public readonly apellido    : string;
    public readonly correo      : string;
    public          contrasena  : string;
    public readonly sobremi?    : string;
    public readonly profesion?  : string;
    public readonly foto_url?   : string;

    constructor( options: RegisterUserParams ) {
        const { apellido, contrasena, correo, foto_url, nombre, profesion, sobremi } = options;
        this.apellido   = apellido;
        this.contrasena = contrasena;
        this.correo     = correo;
        this.foto_url   = foto_url;
        this.nombre     = nombre;
        this.profesion  = profesion;
        this.sobremi    = sobremi;
    }

    static create( reqBody: { [key: string]: any } ): registerReturn {

        const { nombres, apellidos, contrasena, correo } = reqBody;

        if ( !nombres ) return { error: 'El campo [nombres] está vacío' };
        if ( !apellidos ) return { error: 'El campo [apellidos] está vacío' };
        if ( !contrasena ) return { error: 'El campo [contrasena] está vacío' };
        if ( !correo ) return { error: 'El campo [correo] está vacío' };

        return {
            registerUser: new RegisterUserDTO({ apellido: apellidos, contrasena, correo, nombre: nombres }),
        }

    }

}