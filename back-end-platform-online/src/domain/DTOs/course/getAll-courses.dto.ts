interface GetAllCoursesOptions {
    idUsuario   : number;
    idCurso     : number;
    type        : 'estudiante' | 'instructor';
}

type getAllReturn = {
    error?          : string;
    getAllCourses?  : GetAllCoursesDTO;
}

export class GetAllCoursesDTO {

    public readonly idUsuario   : number;
    public readonly idCurso     : number;
    public readonly type        : 'estudiante' | 'instructor';

    constructor( options: GetAllCoursesOptions ){
        const { idCurso, idUsuario, type } = options;
        this.idCurso    = idCurso;
        this.idUsuario  = idUsuario;
        this.type       = type;
    }

    public static getAll( params: { [key: string]: any } ): getAllReturn {

        const { idUsuario, idCurso, type } = params;

        if ( !type ) return { error: 'El campo [type] está vacío' };
        if ( type !== 'estudiante' && type !== 'instructor' ) return { error: 'El valor de [type] debe ser estudiante o instructor' };

        if ( !idCurso ) return { error: 'El campo [idCurso] está vacío' };
        if ( !idUsuario ) return { error: 'El campo [idUsuario] está vacío' };

        return {
            getAllCourses: new GetAllCoursesDTO({ idCurso, idUsuario, type }),
        }

    }

}