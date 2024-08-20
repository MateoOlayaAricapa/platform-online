interface UpdateSeccionOptions {
    id              : number;
    titulo?         : string;
    total_tiempo?   : string;
}

type updateReturn = {
    error?          : string;
    updateSeccion?  : UpdateSeccionDTO;
}

export class UpdateSeccionDTO {

    public readonly id              : number;
    public readonly titulo?         : string;
    public readonly total_tiempo?   : string;

    constructor( options: UpdateSeccionOptions ) {
        const { titulo, total_tiempo, id } = options;
        this.id             = id;  
        this.titulo         = titulo;  
        this.total_tiempo   = total_tiempo;  
    }

    public nothingToUpdate(): boolean {

        for( let key in this ) {
            if ( this[key] !== undefined && key !== 'id' ) return false;
        }

        return true;

    }

    get valuesToUpdate() {

        const objectToUpdate: { [key: string]: any } = {};

        for( let key in this ) {
            if ( this[key] && key !== 'id' ) objectToUpdate[key] = this[key];
        }

        return objectToUpdate;

    }

    public static update( reqBody: { [key: string]: any } ): updateReturn {

        const { titulo, total_tiempo, id } = reqBody;

        if ( !id ) return { error: 'El campo [id] está vacío' };

        return {
            updateSeccion: new UpdateSeccionDTO({ titulo, total_tiempo, id }),
        }

    }

}