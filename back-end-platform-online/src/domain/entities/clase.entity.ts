interface ClaseEntityOptions {
    id_clase        : number;
    id_seccion      : number;
    titulo          : string;
    tiempo          : string;
    url_contenido   : string;
    tipo            : string;
    estaCompletado  : boolean;
}

export class ClaseEntity {
    
    public readonly id_clase        : number;
    public readonly id_seccion      : number;
    public readonly titulo          : string;
    public readonly tiempo          : string;
    public readonly url_contenido   : string;
    public readonly tipo            : string;
    public readonly estaCompletado  : boolean;

    private constructor( options: ClaseEntityOptions ) {
        const { estaCompletado, id_clase, id_seccion, tiempo, tipo, titulo, url_contenido } = options;
        this.id_clase        = id_clase;
        this.id_seccion      = id_seccion;
        this.titulo          = titulo;
        this.tiempo          = tiempo;
        this.url_contenido   = url_contenido;
        this.tipo            = tipo;
        this.estaCompletado  = estaCompletado;
    }

    static fromObject( object: {[key: string]: any} ): ClaseEntity {

        const { estaCompletado, id_clase, id_seccion, tiempo, tipo, titulo, url_contenido } = object;

        return new ClaseEntity({ estaCompletado, id_clase, id_seccion, tiempo, tipo, titulo, url_contenido });

    }

}