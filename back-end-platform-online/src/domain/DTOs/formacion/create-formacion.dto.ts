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

    private static isReadyToCreateFormaciones( formaciones: { [key: string]: any }[] ): string | undefined {

        for( let formacion of formaciones ) {

            for( let field in formacion ) {

                if( !formacion[field] ) return `El campo ${ field } está vacío`;

                switch ( typeof formacion[field] ) {
                    case 'number':
                        if ( formacion[field] < 0 ) return `No debe ser menor a cero: ${ field }`;
                        break;
                    case 'string':
                        if ( field === 'id_curso' ) return `El campo ${ field } debe ser un número`;
                        break;
                }

            }

        }

    }

    static create( reqBody: { [key: string]: any }[] ): createReturn {

        const result = this.isReadyToCreateFormaciones( reqBody );
        if ( result ) return { error: result };

        let createFormaciones = reqBody.map( ({ contenido, id_curso }) => new CreateFormacionDTO({ contenido, id_curso }) );

        return {
            createFormaciones,
        }

    }

}