interface FormacionEntityOptions {
    id_formacion: number;
    id_curso    : number;
    contenido   : string;
}

export class FormacionEntity {
    
    public readonly id_formacion: number;
    public readonly id_curso    : number;
    public readonly contenido   : string;

    private constructor( options: FormacionEntityOptions ){
        const { contenido, id_curso, id_formacion } = options;
        this.id_formacion   = id_formacion;
        this.contenido      = contenido;
        this.id_curso       = id_curso;
    }

    static fromObjects( formaciones: { [key: string]: any }[] ): FormacionEntity[] {
        return formaciones.map( ({ contenido, id_curso, id_formacion }) => new FormacionEntity({ contenido, id_curso, id_formacion }) );
    }

    static fromObject( object: { [key: string]: any } ): FormacionEntity {
        const { contenido, id_curso, id_formacion } = object;
        return new FormacionEntity({ contenido, id_curso, id_formacion });
    }

}