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

    private static ReadyToCreateTemas( temas: { [key: string]: any }[] ): string | undefined {

        for( let tema of temas ) {

            const properties_object = Object.getOwnPropertyNames( tema );

            for( let mandatory_propertie of ['nombre'] ) {

                if ( !properties_object.includes( mandatory_propertie ) ) {
                    return `[${ mandatory_propertie }] es obligatoria`;
                }

            }

            for( let field in tema ) {
                
                switch ( typeof tema[field] ) {
                    case 'string':
                        if ( tema[field] === '' ) return `[${ field }] está vacío`;
                        break;

                    case 'number':
                        if ( tema[field] < 0 ) return `[${ field }] no debe ser menor a cero`;
                        break;
                }

            }

        }

    }

    static create( reqBody: { [key: string]: any }[] ): returnCreate {

        const result = this.ReadyToCreateTemas( reqBody );
        if ( result ) return { error: result };

        return {
            createTemas: reqBody.map( ({ nombre }) => new CreateTemaDTO({ nombre }) ),
        }

    }

}