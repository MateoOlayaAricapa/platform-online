interface UsuarioCursoEntityOptions {
    id_curso        : number;
    id_usuario      : number;
    rol             : string;
    estaCompletado  : boolean;
}

export class UsuarioCursoEntity {
    
    public readonly id_curso        : number;
    public readonly id_usuario      : number;
    public readonly rol             : string;
    public readonly estaCompletado  : boolean;
    
    constructor( options: UsuarioCursoEntityOptions ) {
        const { estaCompletado, id_curso, id_usuario, rol } = options;
        this.id_curso       = id_curso;
        this.estaCompletado = estaCompletado;
        this.id_usuario     = id_usuario;
        this.rol            = rol;
    }

    static fromObject( object: {[key: string]: any} ): UsuarioCursoEntity {

        const { estaCompletado, id_curso, id_usuario, rol } = object;

        return new UsuarioCursoEntity({ estaCompletado, id_curso, id_usuario, rol });

    }

}