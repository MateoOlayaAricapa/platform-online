interface UpdateCourseOptions {
    id              : number;
    titulo?         : string;
    descripcion?    : string;
    idioma?         : string;
    total_secciones?: number;
    total_tiempo?   : number;
    video_url?      : string;
    imagen_url?     : string;
}

type updateReturn = {
    error?          : string;
    updateCourse?   : UpdateCourseDTO;
}

export class UpdateCourseDTO {

    public readonly id              : number;

    public readonly titulo?         : string;
    public readonly descripcion?    : string;
    public readonly idioma?         : string;
    public readonly total_secciones?: number;
    public readonly total_tiempo?   : number;
    public readonly video_url?      : string;
    public readonly imagen_url?     : string;

    constructor( options: UpdateCourseOptions ){
        const { descripcion, idioma, imagen_url, titulo, total_secciones, total_tiempo, video_url, id } = options;
        this.titulo          = titulo;
        this.descripcion     = descripcion;
        this.idioma          = idioma;
        this.total_secciones = total_secciones;
        this.total_tiempo    = total_tiempo;
        this.video_url       = video_url;
        this.imagen_url      = imagen_url;

        this.id              = id;
    }

    public nothingToUpdate(): boolean {

        for( let key in this ) {
            if ( this[key] !== undefined && key !== 'id' ) return false;
        }

        return true;

    }

    get valuesToUpdate() {

        const objectUpdate: { [key: string]: any } = {};

        for( let key in this ) {
            if ( this[key] && key !=='id' ) objectUpdate[key] = this[key];
        }

        return objectUpdate;

    }

    static update( reqBody: { [key: string]: any } ): updateReturn {

        const { descripcion, idioma, imagen_url, titulo, total_secciones, total_tiempo, video_url, id } = reqBody;
        if ( !id ) return { error: 'El id está vacío' };

        return {
            updateCourse: new UpdateCourseDTO({ descripcion, idioma, imagen_url, titulo, total_secciones, total_tiempo, video_url, id }),
        }

    }

}