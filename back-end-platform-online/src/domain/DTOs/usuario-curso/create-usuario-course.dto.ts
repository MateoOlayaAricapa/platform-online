interface CreateUserCourseOptions {
    id_curso        : number;
    id_usuario      : number;
    rol             : string;
}

type createReturn = {
    error?              : string;
    createUserCourse?   : CreateUserCourseDTO;
}

export class CreateUserCourseDTO {
    
    public readonly id_curso        : number;
    public readonly id_usuario      : number;
    public readonly rol             : string;
    public readonly estaCompletado  : boolean;

    constructor( options: CreateUserCourseOptions ){
        const { id_curso, id_usuario, rol} = options;
        this.id_curso       = id_curso;
        this.estaCompletado = false;
        this.id_usuario     = id_usuario;
        this.rol            = rol;
    }

    static create( reqBody: { [key: string]: any } ): createReturn {

        const { id_curso, id_usuario, rol } = reqBody;

        if ( !id_curso ) return { error: 'El campo [id_curso] está vacío' };
        if ( !id_usuario ) return { error: 'El campo [id_usuario] está vacío' }
        if ( !rol ) return { error: 'El campo [rol] está vacío' }

        return {
            createUserCourse: new CreateUserCourseDTO({ id_curso, id_usuario, rol }),
        }

    }

}