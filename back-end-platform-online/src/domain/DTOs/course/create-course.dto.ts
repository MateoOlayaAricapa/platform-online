interface CreateCourseOptions {
    titulo:            string;
    descripcion:       string;
    fecha_creacion:    Date;
    idioma:            string;
    total_secciones:   number;
    total_clases:      number;
    total_tiempo:      string;
    video_url:         string;
    imagen_url:        string;
}

type createReturn = {
    error?          : string;
    createCourse?   : CreateCourseDTO;
}

export class CreateCourseDTO {
    
    public readonly titulo:            string;
    public readonly descripcion:       string;
    public readonly fecha_creacion:    Date;
    public readonly idioma:            string;
    public readonly total_secciones:   number;
    public readonly total_clases:      number;
    public readonly total_tiempo:      string;
    public readonly video_url:         string;
    public readonly imagen_url:        string;

    constructor( options: CreateCourseOptions ) {
        const { titulo, descripcion, fecha_creacion, idioma, imagen_url, total_clases, total_secciones, total_tiempo, video_url } = options;
        this.titulo             = titulo;
        this.descripcion        = descripcion;
        this.fecha_creacion     = fecha_creacion;
        this.idioma             = idioma;
        this.imagen_url         = imagen_url;
        this.total_clases       = total_clases;
        this.total_secciones    = total_secciones;
        this.total_tiempo       = total_tiempo;
        this.video_url          = video_url;
    }

    public static create( reqBody: { [key: string]: any } ): createReturn {

        const { titulo, descripcion, fecha_creacion, idioma, imagen_url, total_clases, total_secciones, total_tiempo, video_url } = reqBody;

        if ( !titulo )          return { error: 'El campo [titulo] está vacío' };
        if ( !descripcion )     return { error: 'El campo [descripcion] está vacío' };
        if ( !fecha_creacion )  return { error: 'El campo [fecha_creacion] está vacío' };
        if ( !idioma )          return { error: 'El campo [idioma] está vacío' };
        if ( !imagen_url )      return { error: 'El campo [imagen_url] está vacío' };
        if ( !total_clases )    return { error: 'El campo [total_clases] está vacío' };
        if ( !total_secciones ) return { error: 'El campo [total_secciones] está vacío' };
        if ( !total_tiempo )    return { error: 'El campo [total_tiempo] está vacío' };
        if ( !video_url )       return { error: 'El campo [video_url] está vacío' };

        return {
            createCourse: new CreateCourseDTO({ 
                titulo, 
                descripcion, 
                fecha_creacion, 
                idioma, 
                imagen_url, 
                total_clases, 
                total_secciones, 
                total_tiempo, 
                video_url 
            }),
        }

    }

}