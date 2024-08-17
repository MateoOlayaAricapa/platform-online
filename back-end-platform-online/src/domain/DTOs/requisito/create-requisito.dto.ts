interface CreateRequisitoOptions {
    id_curso    : number;
    contenido   : string;
}

type createReturn = {
    error?           : string;
    createRequisitos?: CreateRequisitoDTO[];
}

export class CreateRequisitoDTO {
    
    public readonly id_curso    : number;
    public readonly contenido   : string;

    constructor( options: CreateRequisitoOptions ) {
        const { contenido, id_curso } = options;
        this.contenido  = contenido;
        this.id_curso   = id_curso;
    }

    private static isReadyToCreateRequisitos( requisitos: { [key: string]: any }[] ): string | undefined {

        for( let requisito of requisitos ) {

            const properties_object = Object.getOwnPropertyNames( requisito );

            for( let propertie_mandatory of ['id_curso', 'contenido'] ) {
                
                if ( !properties_object.includes( propertie_mandatory ) ) {
                    return `[${ propertie_mandatory }] es obligatoria`;
                }

            }

            for( let field in requisito ) {

                switch ( typeof requisito[field] ) {
                    case 'string':
                        if ( requisito[field] === '' ) return `${ field } está vacío`;
                        if ( field === 'id_curso' ) return `${ field } debe ser un número`;
                        break;
                    case 'number':
                        if ( requisito[field] < 0 ) return `No debe ser menor a cero: ${ field }`;
                        break;
                }

            }

        }

    }

    public static create( reqBody: { [key: string]: any }[] ): createReturn {

        const result = this.isReadyToCreateRequisitos( reqBody );
        if ( result ) return { error: result };

        let createRequisitos = reqBody.map(({ id_curso, contenido }) => new CreateRequisitoDTO({ id_curso, contenido }));

        return {
            createRequisitos,
        }

    }

}