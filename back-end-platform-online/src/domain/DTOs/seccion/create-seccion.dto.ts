interface CreateSeccionOptions {
    id_curso    : number;
    titulo      : string;
    total_tiempo: string;
}

type createReturn = {
    error?          : string;
    createSeccion?  : CreateSeccionDTO;
}

export class CreateSeccionDTO {

    public readonly id_curso    : number;
    public readonly titulo      : string;
    public readonly total_tiempo: string;

    constructor( options: CreateSeccionOptions ){
        const { id_curso, titulo, total_tiempo } = options;
        this.id_curso     = id_curso;   
        this.titulo       = titulo;
        this.total_tiempo = total_tiempo;
    }

    private static ReadyToCreateSeccion( seccion: { [key: string]: any } ): string | undefined {

        const properties_object = Object.getOwnPropertyNames( seccion );

        for( let mandatory_propertie of ['id_curso', 'titulo', 'total_tiempo'] ) {

            if ( !properties_object.includes( mandatory_propertie ) ) { 
                return `[ ${ mandatory_propertie } ] es obligatoria`;
            }
        
        }

        for( let field in seccion ) {

            switch ( typeof seccion[field] ) {
                case 'number':
                    if ( seccion[field] < 0 ) return `[${ field }] no debe ser menor a cero`;
                    break;

                case 'string':
                    if ( field === 'id_curso' ) return `[${ field }] debe ser un número`;
                    if ( seccion[field] === '' ) return `[${ field }] está vacío`;
                    break;
            }

        }

    }

    static create( reqBody: { [key: string]: any } ): createReturn {

        const { id_curso, titulo, total_tiempo } = reqBody;

        const result = this.ReadyToCreateSeccion( reqBody );
        if ( result ) return { error: result };

        return {
            createSeccion: new CreateSeccionDTO({ id_curso, titulo, total_tiempo }),
        }

    }

}