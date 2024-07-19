interface UpdateUserParams {
    id          : number;
    nombre?     : string;
    apellido?   : string;
    contrasena? : string;
    sobremi?    : string;
    profesion?  : string;
    foto_url?   : string;
}

type UpdateReturn = {
    error?      : string;
    updateUser? : UpdateUserDTO;
}

export class UpdateUserDTO {
    
    public readonly id          : number;
    public readonly nombre?     : string;
    public readonly apellido?   : string;
    public          contrasena? : string;
    public readonly sobremi?    : string;
    public readonly profesion?  : string;
    public readonly foto_url?   : string;

    constructor( options: UpdateUserParams ){
        const { apellido, contrasena, foto_url, nombre, profesion, sobremi, id } = options;
        this.apellido   = apellido;
        this.contrasena = contrasena;
        this.foto_url   = foto_url;
        this.nombre     = nombre;
        this.profesion  = profesion;
        this.sobremi    = sobremi;
        this.id         = id;
    }

    get valuesToUpdate() {

        const objectUpdate: { [key: string]: any } = {};

        if ( this.apellido ) objectUpdate.apellido = this.apellido;
        if ( this.nombre )  objectUpdate.nombre = this.nombre;
        if ( this.contrasena ) objectUpdate.contrasena = this.contrasena;
        if ( this.foto_url ) objectUpdate.foto_url = this.foto_url;
        if ( this.profesion ) objectUpdate.profesion = this.profesion;
        if ( this.sobremi ) objectUpdate.sobremi = this.sobremi;

        return objectUpdate;

    }

    get nothingToUpdate() {

        const isAllEmpty = true;

        for( const attribute of Object.keys( this ) ) {

            const value = ( this as any )[ attribute ];
            if ( value !== undefined && attribute !== 'id' ) return false;

        }

        return isAllEmpty;

    }

    get passwordToUpdate() {

        const isOnlyPassword = true;

        for( const attribute of Object.keys( this ) ) {

            const value = ( this as any )[ attribute ];
            if ( value !== undefined && attribute !== 'id' && attribute !== 'contrasena' ) return false;

        }

        return isOnlyPassword;

    }

    static update( reqBody: { [key: string]: any } ): UpdateReturn {

        const { id, nombre, apellido, contrasena, sobremi, profesion, foto_url } = reqBody;

        if ( !id ) return { error: 'El valor [id] está vacío' };

        return {
            updateUser: new UpdateUserDTO({ apellido, contrasena, foto_url, nombre, profesion, sobremi, id }),
        }

    }

}