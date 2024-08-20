interface CreateCourseTopicOptions {
    id_curso    : number;
    id_tema     : number;
}

type createReturn = {
    error?              : string;
    createCoursesTopics?: CreateCourseTopicDTO[];
}

export class CreateCourseTopicDTO {
    
    public readonly id_curso    : number;
    public readonly id_tema     : number;

    private constructor( options: CreateCourseTopicOptions ){
        const { id_curso, id_tema } = options;
        this.id_curso   = id_curso;
        this.id_tema    = id_tema;
    }

    private static ReadyToCreateCoursesTopics( cursosTemas: { [key: string]: any }[] ): string | undefined {

        for( let cursoTema of cursosTemas ) {

            const properties_object = Object.getOwnPropertyNames( cursoTema );

            for( let mandatory_propertie of ['id_curso', 'id_tema'] ) {

                if ( !properties_object.includes( mandatory_propertie ) ) {
                    return `[ ${ mandatory_propertie } ] es obligatoria`;
                }

            }

            for( let field in cursoTema ) {

                switch ( typeof cursoTema[field] ) {
                    case 'number':
                        if ( cursoTema[field] < 0 ) return `[${ field }] no debe ser menor a cero`;
                        break;

                    case 'string':
                        if ( field === 'id_curso' ) return `[${ field }] debe ser un número`;
                        if ( field === 'id_tema' )  return `[${ field }] debe ser un número`;
                        break;
                }

            }

        }

    }

    public static create( reqBody: { [key: string]: any }[] ): createReturn {

        const result = this.ReadyToCreateCoursesTopics( reqBody );
        if ( result ) return { error: result };

        return {
            createCoursesTopics: reqBody.map( ({ id_curso, id_tema }) => new CreateCourseTopicDTO({ id_curso, id_tema }) ),
        }
        
    }

}