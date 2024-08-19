interface CreateTemaOptions {
    nombre: string;
}

type returnCreate = {
    error?      : string;
    createTemas?: CreateTemaDTO[];
}

export class CreateTemaDTO {

    public readonly nombre: string;

    constructor( options: CreateTemaOptions ) {
        const { nombre } = options;
        this.nombre = nombre;
    }

    private static isReadyToCreateTemas( temas: { [key: string]: any }[] ): string | undefined {

        for( let tema of temas ) {

            for( let propertie_mandatory of ['nombre'] ) {
                if ( !Object.getOwnPropertyNames( tema ).includes( propertie_mandatory ) ) {
                    return `[${ propertie_mandatory }] es obligatoria`;
                }
            }

            for( let field in tema ) {
                
                switch ( typeof tema[field] ) {
                    case 'string':
                        if ( tema[field] === '' ) return `${ field } está vacío`;
                        break;
                    case 'number':
                        if ( tema[field] < 0 ) return `No debe ser menor a cero: ${ field }`;
                        break;
                }

            }

        }

    }

    static create( reqBody: { [key: string]: any }[] ): returnCreate {

        const result = this.isReadyToCreateTemas( reqBody );
        if ( result ) return { error: result };

        return {
            createTemas: reqBody.map( ({ nombre }) => new CreateTemaDTO({ nombre }) ),
        }

    }

}