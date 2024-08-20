interface UsuarioEntityOptions {
    id_usuario  : number;
    nombre      : string;
    apellido    : string;
    correo      : string;
    contrasena  : string;
    sobremi     : string;
    profesion   : string;
    foto_url    : string;
}

export class UsuarioEntity {

    public readonly id_usuario  : number;
    public readonly nombre      : string;   
    public readonly apellido    : string;
    public readonly correo      : string;
    public readonly contrasena  : string;
    public readonly sobremi     : string;
    public readonly profesion   : string;
    public readonly foto_url    : string;

    constructor( options: UsuarioEntityOptions ){
        const { apellido, contrasena, correo, foto_url, nombre, profesion, sobremi, id_usuario } = options;
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.contrasena = contrasena;
        this.foto_url   = foto_url;
        this.profesion  = profesion;
        this.correo     = correo;
        this.sobremi    = sobremi;
        this.id_usuario = id_usuario;
    }

    public static fromObject( object: {[key: string]: any} ): UsuarioEntity {

        const { nombre, apellido, correo, contrasena, sobremi, profesion, foto_url, id_usuario } = object;

        return new UsuarioEntity({ apellido, contrasena, correo, foto_url, nombre, profesion, sobremi, id_usuario });

    }

}