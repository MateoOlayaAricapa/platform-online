interface RequisitoOptions {
    id_requisito: number;
    id_curso    : number;
    contenido   : string;
}

export class RequisitoEntity {
    
    public readonly id_requisito: number;
    public readonly id_curso    : number;
    public readonly contenido   : string;

    private constructor( options: RequisitoOptions ) {
        const { contenido, id_curso, id_requisito } = options;
        this.contenido      = contenido;
        this.id_curso       = id_curso;
        this.id_requisito   = id_requisito;
    }

    static fromObject( object: { [key: string]: any } ) {

        const { id_requisito, id_curso, contenido } = object;
        
        return new RequisitoEntity({ id_curso, contenido, id_requisito });

    }

}