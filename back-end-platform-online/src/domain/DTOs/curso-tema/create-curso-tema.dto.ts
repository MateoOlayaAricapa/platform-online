interface CreateCourseTopicOptions {
    id_curso    : number;
    id_tema     : number;
}

type createReturn = {
    error?              : string;
    createCourseTopic?  : CreateCourseTopicDTO;
}

export class CreateCourseTopicDTO {
    
    public readonly id_curso    : number;
    public readonly id_tema     : number;

    private constructor( options: CreateCourseTopicOptions ){
        const { id_curso, id_tema } = options;
        this.id_curso   = id_curso;
        this.id_tema    = id_tema;
    }

    public static create( reqBody: { [key: string]: any } ): createReturn {

        const { id_curso, id_tema } = reqBody;

        if ( !id_curso ) return { error: 'El campo [id_curso] está vacío' };
        if ( !id_tema )  return { error: 'El campo [id_tema] está vacío' };

        if ( !Number.isInteger( id_curso ) ) return { error: 'El campo [id_curso] no es un número' };
        if ( !Number.isInteger( id_tema ) )  return { error: 'El campo [id_tema] no es un número' };

        return {
            createCourseTopic: new CreateCourseTopicDTO({ id_curso, id_tema }),
        }

    }

}