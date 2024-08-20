interface CursoEntityOptions {
    id_curso        : number;
    titulo          : string;
    descripcion     : string;
    fecha_creacion  : Date;
    idioma          : string;
    total_secciones : number;
    total_clases    : number;
    total_tiempo    : string;
    video_url       : string;
    imagen_url      : string;
}

export class CursoEntity {

    public readonly id_curso        : number;

    public readonly titulo          : string;
    public readonly descripcion     : string;
    public readonly fecha_creacion  : Date;
    public readonly idioma          : string;
    public readonly total_secciones : number;
    public readonly total_clases    : number;
    public readonly total_tiempo    : string;
    public readonly video_url       : string;
    public readonly imagen_url      : string;

    constructor( options: CursoEntityOptions ) {
        const { descripcion, fecha_creacion, idioma, imagen_url, titulo, total_clases, total_secciones, total_tiempo, video_url, id_curso } = options;
        this.descripcion        = descripcion;
        this.fecha_creacion     = fecha_creacion;
        this.idioma             = idioma;
        this.imagen_url         = imagen_url;
        this.titulo             = titulo;
        this.total_clases       = total_clases;
        this.total_secciones    = total_secciones;
        this.total_tiempo       = total_tiempo;
        this.video_url          = video_url;

        this.id_curso           = id_curso;
    }

    public static fromObject( object: { [key: string]: any } ): CursoEntity {

        const { descripcion, fecha_creacion, idioma, imagen_url, titulo, total_clases, total_secciones, total_tiempo, video_url, id_curso } = object;

        return new CursoEntity({ 
            descripcion, 
            fecha_creacion, 
            idioma, 
            imagen_url, 
            titulo, 
            total_clases, 
            total_secciones, 
            total_tiempo, 
            video_url, 
            id_curso 
        });

    }

}