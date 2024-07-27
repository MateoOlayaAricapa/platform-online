interface SeccionEntityOptions {
    id_seccion  : number;
    id_curso    : number;
    titulo      : string;
    total_tiempo: string;
}

export class SeccionEntity {
    
    public readonly id_seccion  : Number;
    public readonly id_curso    : number;
    public readonly titulo      : string;
    public readonly total_tiempo: string;

    private constructor( options: SeccionEntityOptions ) {
        const { id_curso, titulo, total_tiempo, id_seccion } = options;
        this.id_curso     = id_curso;   
        this.titulo       = titulo;
        this.total_tiempo = total_tiempo;
        this.id_seccion   = id_seccion;
    }

    static fromObject( object: { [key: string]: any } ) {

        const { id_curso, titulo, total_tiempo, id_seccion } = object;

        return new SeccionEntity({ id_curso, titulo, total_tiempo, id_seccion });

    }

}