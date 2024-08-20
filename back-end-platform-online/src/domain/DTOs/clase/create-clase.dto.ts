interface CreateClaseOptions {
    id_seccion      : number;
    titulo          : string;
    tiempo          : string;
    url_contenido   : string;
    tipo            : string;
    estaCompletado  : boolean;
}

type createReturn = {
    error?       : string;
    createClases?: CreateClaseDTO[];
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

    private static ReadyToCreateClase( clases: { [key: string]: any }[] ): string | undefined {

        for( let clase of clases ) {

            const properties_object = Object.getOwnPropertyNames( clase );

            for( let mandatory_propertie of ['id_seccion', 'titulo', 'tiempo', 'url_contenido', 'tipo', 'estaCompletado'] ) {

                if ( !properties_object.includes( mandatory_propertie ) ) {
                    return `[ ${ mandatory_propertie } ] es obligatoria`;
                }
            
            }
            
            for( let field in clase ) {

                switch ( typeof clase[field] ) {
                    case 'boolean':
                        if ( clase[field] === undefined ) return `[${ field }] está vacío`;
                        break;

                    case 'string':
                        if ( clase[field] === '' ) return `[${ field }] está vacío`;
                        if ( field === 'id_seccion' ) return `[${ field }] debe ser un número`;
                        break;

                    case 'number':
                        if ( clase[field] < 0 ) return `[${ field }] no debe ser menor a cero`;
                        break;
                }

            }

        }

    }

    static create( reqBody: { [key: string]: any }[] ): createReturn {

        const result = this.ReadyToCreateClase( reqBody );
        if ( result ) return { error: result };

        let createClases = reqBody.map(({ 
            id_seccion, 
            titulo, 
            tiempo, 
            url_contenido, 
            tipo, 
            estaCompletado, 
        }) => new CreateClaseDTO({ id_seccion, titulo, tiempo, url_contenido, tipo, estaCompletado }));

        return {
            createClases,
        }

    }

}