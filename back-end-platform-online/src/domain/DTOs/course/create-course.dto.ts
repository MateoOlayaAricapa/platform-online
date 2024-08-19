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

    private static ReadyToCreateCourse( course: { [key: string]: any } ): string | undefined {

        const properties_object = Object.getOwnPropertyNames( course );

        for( let mandatory_propertie of ['titulo', 'descripcion', 'fecha_creacion', 'idioma', 'imagen_url', 'total_clases', 'total_secciones', 'total_tiempo', 'video_url'] ) {

            if ( !properties_object.includes( mandatory_propertie ) ) {
                return `[ ${ mandatory_propertie } ] es obligatoria`;
            }

        }

        for( let field in course ) {

            switch ( typeof course[field] ) {
                case 'string':
                    if ( course[field] === '' ) return `[${ field }] está vacío`;
                    break;

                case 'number':
                    if ( course[field] < 0 ) return `[${ field }] no debe ser menor a cero`;
                    break;
            }

        }

    }

    public static create( reqBody: { [key: string]: any } ): createReturn {

        const { titulo, descripcion, fecha_creacion, idioma, imagen_url, total_clases, total_secciones, total_tiempo, video_url } = reqBody;

        const result = this.ReadyToCreateCourse( reqBody );
        if ( result ) return { error: result };

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