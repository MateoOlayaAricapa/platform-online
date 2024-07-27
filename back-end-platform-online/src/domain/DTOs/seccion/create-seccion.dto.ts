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

    static create( reqBody: { [key: string]: any } ): createReturn {

        const { id_curso, titulo, total_tiempo } = reqBody;

        if ( !id_curso )        return { error: 'El campo [id_curso] está vacío' };
        if ( !titulo )          return { error: 'El campo [titulo] está vacío' };
        if ( !total_tiempo )    return { error: 'El campo [total_tiempo] está vacío' };

        return {
            createSeccion: new CreateSeccionDTO({ id_curso, titulo, total_tiempo }),
        }

    }

}