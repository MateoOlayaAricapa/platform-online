interface CreateFormacionOptions {
    id_curso    : number;
    contenido   : string;
}

type createReturn = {
    error?              : string;
    createFormaciones?  : CreateFormacionDTO[];
}

export class CreateFormacionDTO {

    public readonly id_curso    : number;
    public readonly contenido   : string;

    constructor( options: CreateFormacionOptions ) {
        const { contenido, id_curso } = options;
        this.contenido  = contenido;
        this.id_curso   = id_curso;
    }

    private static ReadyToCreateFormaciones( formaciones: { [key: string]: any }[] ): string | undefined {

        for( let formacion of formaciones ) {

            const properties_object = Object.getOwnPropertyNames( formacion );

            for( let mandatory_propertie of ['id_curso', 'contenido'] ) {

                if ( !properties_object.includes( mandatory_propertie ) ) {
                    return `[ ${ mandatory_propertie } ] es obligatoria`;
                }

            }

            for( let field in formacion ) {

                switch ( typeof formacion[field] ) {
                    case 'number':
                        if ( formacion[field] < 0 ) return `[${ field }] no debe ser menor a cero`;
                        break;
                        
                    case 'string':
                        if ( field === 'id_curso' ) return `[${ field }] debe ser un número`;
                        if ( formacion[field] === '' ) return `[${ field }] está vacío`;
                        break;
                }

            }

        }

    }

    static create( reqBody: { [key: string]: any }[] ): createReturn {

        const result = this.ReadyToCreateFormaciones( reqBody );
        if ( result ) return { error: result };

        let createFormaciones = reqBody.map( ({ contenido, id_curso }) => new CreateFormacionDTO({ contenido, id_curso }) );

        return {
            createFormaciones,
        }

    }

}