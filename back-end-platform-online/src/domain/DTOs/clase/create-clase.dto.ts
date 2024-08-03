interface CreateClaseOptions {
    id_seccion      : number;
    titulo          : string;
    tiempo          : string;
    url_contenido   : string;
    tipo            : string;
    estaCompletado  : boolean;
}

type createReturn = {
    error?      : string;
    createClase?: CreateClaseDTO;
}

export class CreateClaseDTO {

    public readonly id_seccion      : number;
    public readonly titulo          : string;
    public readonly tiempo          : string;
    public readonly url_contenido   : string;
    public readonly tipo            : string;
    public readonly estaCompletado  : boolean;
    
    constructor( options: CreateClaseOptions ){
        const { estaCompletado, id_seccion, tiempo, tipo, titulo, url_contenido } = options;
        this.id_seccion      = id_seccion;
        this.titulo          = titulo;
        this.tiempo          = tiempo;
        this.url_contenido   = url_contenido;
        this.tipo            = tipo;
        this.estaCompletado  = estaCompletado;
    }

    private static isReadyToCreateClase( object: { [key: string]: any } ): string | undefined {

        for( let field in object ) {

            if ( !object[field] ) return `El campo ${ field } está vacío`;

            switch ( typeof object[field] ) {
                case 'number':
                    if ( <number>object[field] < 0 ) return `No puede ser menor a cero: ${ field }`;
                    break;
            }

        }

    }

    static create( reqBody: { [key: string]: any } ): createReturn {

        const { id_seccion, titulo, tiempo, url_contenido, tipo, estaCompletado } = reqBody;

        const result = this.isReadyToCreateClase( reqBody );
        if ( result ) return { error: result };

        return {
            createClase: new CreateClaseDTO({ id_seccion, titulo, tiempo, url_contenido, tipo, estaCompletado }),
        }

    }

}