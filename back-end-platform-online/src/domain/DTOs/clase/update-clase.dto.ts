interface UpdateClaseOptions {
    id_clase         : number;
    titulo?          : string;
    tiempo?          : string;
    url_contenido?   : string;
    tipo?            : string;
    estaCompletado?  : boolean;
}

type updateReturn = {
    error?      : string;
    updateClase?: UpdateClaseDTO;
}

export class UpdateClaseDTO {
    
    public readonly id_clase         : number;
    public readonly titulo?          : string;
    public readonly tiempo?          : string;
    public readonly url_contenido?   : string;
    public readonly tipo?            : string;
    public readonly estaCompletado?  : boolean;

    constructor( options: UpdateClaseOptions ){
        const { tiempo, estaCompletado, tipo, titulo, url_contenido, id_clase } = options;
        this.id_clase        = id_clase;
        this.titulo          = titulo;
        this.tiempo          = tiempo;
        this.url_contenido   = url_contenido;
        this.tipo            = tipo;
        this.estaCompletado  = estaCompletado;
    }

    get valuesToUpdate() {

        const objectUpdate: { [key: string]: any } = {};

        for( let key in this ) {
            
            switch ( typeof this[key] ) {
                case 'boolean':
                    if ( this[key] !== undefined ) objectUpdate[key] = this[key];
                    break;
            
                default:
                    if ( this[key] && key !== 'id_clase' ) objectUpdate[key] = this[key];
                    break;
            }

        }

        return objectUpdate;

    }

    static update( reqBody: { [key: string]: any } ): updateReturn {

        const { tiempo, estaCompletado, tipo, titulo, url_contenido, id } = reqBody;

        if ( !id ) return { error: `El campo ${ id } está vacío` };

        return {
            updateClase: new UpdateClaseDTO({ tiempo, estaCompletado, tipo, titulo, url_contenido, id_clase: id })
        }

    }

}