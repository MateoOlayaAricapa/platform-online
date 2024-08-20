interface GetAllCoursesOptions {
    idUsuario   : number;
    type        : 'estudiante' | 'instructor';
}

type getAllReturn = {
    error?          : string;
    getAllCourses?  : GetAllCoursesDTO;
}

export class GetAllCoursesDTO {

    public readonly idUsuario   : number;
    public readonly type        : 'estudiante' | 'instructor';

    constructor( options: GetAllCoursesOptions ){
        const { idUsuario, type } = options;
        this.idUsuario  = idUsuario;
        this.type       = type;
    }

    public static getAll( params: { [key: string]: any } ): getAllReturn {

        const { idUsuario, type } = params;

        if ( !type ) return { error: 'El campo [type] está vacío' };
        if ( type !== 'estudiante' && type !== 'instructor' ) return { error: 'El valor de [type] debe ser estudiante o instructor' };

        if ( !idUsuario ) return { error: 'El campo [idUsuario] está vacío' };

        return {
            getAllCourses: new GetAllCoursesDTO({ idUsuario, type }),
        }

    }

}