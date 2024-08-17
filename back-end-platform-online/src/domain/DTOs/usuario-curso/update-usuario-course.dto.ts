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

        const objectToUpdate: { [key: string]: any } = {};

        for( const key in this ) {
            if ( this[key] && key !== 'id_usuario_curso' ) objectToUpdate[key] = this[key];
        }

        return objectToUpdate;

    }

    public static update( reqBody: {[key: string]: any} ): updateReturn {

        const { id, rol, estaCompletado } = reqBody;

        if ( !id ) return { error: 'El campo [id] está vacío' };

        return {
            updateUsuarioCurso: new UpdateUserCourseDTO({ rol, estaCompletado, id_usuario_curso: id }),
        }

    }

}