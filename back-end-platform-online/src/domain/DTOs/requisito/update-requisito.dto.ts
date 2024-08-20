interface UpdateRequisitoOptions {
    id        : number;
    contenido?: string;
}

type returnUpdate = {
    error?          : string;
    updateRequisito?: UpdateRequisitoDTO;
}

export class UpdateRequisitoDTO {

    public readonly id          : number;
    public readonly contenido?  : string;
    
    constructor( options: UpdateRequisitoOptions ) {
        const { id, contenido } = options;
        this.id         = id;
        this.contenido  = contenido;
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

    static update( reqBody: { [key: string]: any } ): returnUpdate {

        const { id, contenido } = reqBody;
        if ( !id ) return { error: 'id está vacío' };

        return {
            updateRequisito: new UpdateRequisitoDTO({ id, contenido }),
        }

    }

}