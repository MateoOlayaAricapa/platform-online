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

    private static isReadyToCreateCoursesTopics( cursosTemas: { [key: string]: any }[] ): string | undefined {

        for( let cursoTema of cursosTemas ) {

            for( let propertie_mandatory of ['id_curso', 'id_tema'] ) {

                if ( !Object.getOwnPropertyNames( cursoTema ).includes( propertie_mandatory ) ) {
                    return `${ propertie_mandatory } es obligatoria`;
                }

            }

            for( let field in cursoTema ) {

                switch ( typeof cursoTema[field] ) {
                    case 'number':
                        if ( cursoTema[field] < 0 ) return `${ field } no debe ser menor a cero`;
                        break;
                    case 'string':
                        if ( field === 'id_curso' ) return `${ field } debe ser un número`;
                        if ( field === 'id_tema' )  return `${ field } debe ser un número`;
                        break;
                }

            }

        }

    }

    public static create( reqBody: { [key: string]: any }[] ): createReturn {

        const result = this.isReadyToCreateCoursesTopics( reqBody );
        if ( result ) return { error: result };

        return {
            createCoursesTopics: reqBody.map( ({ id_curso, id_tema }) => new CreateCourseTopicDTO({ id_curso, id_tema }) ),
        }
        
    }

}