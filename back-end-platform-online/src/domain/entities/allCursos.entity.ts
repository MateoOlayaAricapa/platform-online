interface UsuarioCurso {
    id_usuario_curso    : number;
    estaCompletado      : number;
    rol                 : string;
    usuario             : { apellido: string, nombre: string };
}

interface AllCursosEntityOptions {
    id_curso        : number;
    descripcion     : string;
    total_clases    : number;
    total_secciones : number;
    total_tiempo    : string;
    imagen_url      : string;
    titulo          : string;
    usuarioCurso    : UsuarioCurso[];
}

export class AllCursosEntity {

    private readonly id_curso        : number;
    private readonly descripcion     : string;
    private readonly total_clases    : number;
    private readonly total_secciones : number;
    private readonly total_tiempo    : string;
    private readonly imagen_url      : string;
    private readonly titulo          : string;
    private readonly usuarioCurso    : UsuarioCurso[];

    private constructor( options: AllCursosEntityOptions ){
        const { descripcion, id_curso, imagen_url, titulo, total_clases, total_secciones, total_tiempo, usuarioCurso } = options;
        this.id_curso        = id_curso;
        this.descripcion     = descripcion;
        this.total_clases    = total_clases;
        this.total_secciones = total_secciones;
        this.total_tiempo    = total_tiempo;
        this.imagen_url      = imagen_url;
        this.titulo          = titulo;
        this.usuarioCurso    = usuarioCurso;
    }

    public static fromObject( object: { [key: string]: any } ) {

        const { descripcion, id_curso, imagen_url, titulo, total_clases, total_secciones, total_tiempo, usuarioCurso } = object;

        return new AllCursosEntity({ descripcion, id_curso, imagen_url, titulo, total_clases, total_secciones, total_tiempo, usuarioCurso });

    }

}