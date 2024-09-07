interface UserOptions {
    nombre      : string;
    apellido    : string;
    foto_url    : null | string;
    profesion   : null | string;
    correo      : string;
    sobremi     : null | string;
}

export class User {

    public readonly nombre      : string;
    public readonly apellido    : string;
    public readonly foto_url    : null | string;
    public readonly profesion   : null | string;
    public readonly correo      : string;
    public readonly sobremi     : null | string;

    constructor( options: UserOptions ) {
        const { apellido, correo, foto_url, nombre, profesion, sobremi } = options;
        this.apellido   = apellido;
        this.correo     = correo;
        this.foto_url   = foto_url;
        this.nombre     = nombre;
        this.profesion  = profesion;
        this.sobremi    = sobremi;
    }

    toJSON() {

        return {
            nombre   : this.nombre,
            apellido : this.apellido,
            foto_url : this.foto_url,
            profesion: this.profesion,
            correo   : this.correo,
            sobremi  : this.sobremi,
        }

    }

}