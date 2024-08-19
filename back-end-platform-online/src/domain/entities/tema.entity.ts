interface TemaEntityOptions {
    id_tema : number;
    nombre  : string;
}

export class TemaEntity {

    public readonly id_tema : number;
    public readonly nombre  : string;

    private constructor( options: TemaEntityOptions ){
        const { id_tema, nombre } = options;
        this.id_tema = id_tema;
        this.nombre  = nombre;
    }

    static fromObject( object: { [key: string]: any } ): TemaEntity {

        const { id_tema, nombre } = object;

        return new TemaEntity({ id_tema, nombre });

    }

}