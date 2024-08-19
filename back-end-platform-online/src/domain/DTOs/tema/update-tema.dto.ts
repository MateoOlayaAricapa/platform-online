interface UpdateTemaOptions {
    id_tema : number;
    nombre  : string;
}

type returnUpdate = {
    error?      : string;
    updateTema? : UpdateTemaDTO;
}

export class UpdateTemaDTO {

    public readonly id_tema : number;
    public readonly nombre  : string;
    
    constructor( options: UpdateTemaOptions ){
        const { id_tema, nombre } = options;
        this.id_tema = id_tema;
        this.nombre  = nombre;
    }

    public nothingToUpdate(): boolean {

        for( let key in this ) {
            if ( this[key] !== undefined && key !== 'id_tema' ) return false;
        }

        return true;

    }

    get valuesToUpdate(){

        const objectToUpdate: { [key: string]: any } = {};

        for( let key in this ) {
            if ( this[key] && key !== 'id_tema' ) objectToUpdate[key] = this[key];
        }

        return objectToUpdate;

    }

    static update( reqBody: { [key: string]: any } ): returnUpdate {

        const { id, nombre } = reqBody;
        if ( !id ) return { error: 'El id está vacío' };

        return {
            updateTema: new UpdateTemaDTO({ id_tema: id, nombre }),
        }

    }

}