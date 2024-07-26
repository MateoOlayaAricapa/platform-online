interface UpdateUserCourseOptions {
    id_usuario_curso: number;
    rol?            : string;
    estaCompletado? : boolean;
}

type updateReturn = {
    error?              : string;
    updateUsuarioCurso? : UpdateUserCourseDTO;
}

export class UpdateUserCourseDTO {

    public readonly id_usuario_curso: number;
    public readonly rol?            : string;
    public readonly estaCompletado? : boolean;

    constructor( options: UpdateUserCourseOptions ){
        const { id_usuario_curso, rol, estaCompletado } = options;
        this.id_usuario_curso = id_usuario_curso;
        this.rol              = rol;
        this.estaCompletado   = estaCompletado;
    }

    get valuesToUpdate() {

        const objectUpdate: { [key: string]: any } = {};

        for( const attribute of Object.keys(this) ) {

            const value = ( this as any )[attribute];
            if ( value && attribute !=='id_usuario_curso' ) objectUpdate[attribute] = value;

        }

        return objectUpdate;

    }

    public static update( reqBody: {[key: string]: any} ): updateReturn {

        const { id, rol, estaCompletado } = reqBody;

        if ( !id ) return { error: 'El campo [id] está vacío' };

        return {
            updateUsuarioCurso: new UpdateUserCourseDTO({ rol, estaCompletado, id_usuario_curso: id })
        }

    }

}