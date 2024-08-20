interface FormacionEntityOptions {
    id_curso    : number;
    contenido   : string;
}

export class FormacionEntity {
    
    public readonly id_curso    : number;
    public readonly contenido   : string;

    private constructor( options: FormacionEntityOptions ){
        const { contenido, id_curso } = options;
        this.contenido  = contenido;
        this.id_curso   = id_curso;
    }

    static fromObjects( formaciones: { [key: string]: any }[] ): FormacionEntity[] {
        return formaciones.map( ({ contenido, id_curso }) => new FormacionEntity({ contenido, id_curso }) );
    }

    static fromObject( object: { [key: string]: any } ): FormacionEntity {
        const { contenido, id_curso } = object;
        return new FormacionEntity({ contenido, id_curso });
    }

}