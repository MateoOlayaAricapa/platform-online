interface UpdateFormacionOptions {
    id          : number;
    contenido   : string;
}

type updateReturn = {
    error?          : string;
    updateFormacion?: UpdateFormacionDTO;
}

export class UpdateFormacionDTO {

    public readonly id          : number;
    public readonly contenido   : string;

    constructor( options: UpdateFormacionOptions ){
        const { contenido, id } = options;
        this.contenido  = contenido;
        this.id         = id;
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

    static update( reqBody: { [key: string]: any } ): updateReturn {

        const { id, contenido } = reqBody;
        
        if ( !id ) return { error: `El campo id está vacío` };

        return {
            updateFormacion: new UpdateFormacionDTO({ contenido, id }),
        }

    }

}