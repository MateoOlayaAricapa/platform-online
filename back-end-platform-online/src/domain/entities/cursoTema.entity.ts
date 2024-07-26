interface CursoTemaOptions {
    id_curso_tema   : number;
    id_curso        : number;
    id_tema         : number;
}

export class CursoTemaEntity {

    public readonly id_curso_tema   : number;
    public readonly id_curso        : number;
    public readonly id_tema         : number;
    
    private constructor( options: CursoTemaOptions ){
        const { id_curso, id_curso_tema, id_tema } = options;
        this.id_curso       = id_curso;
        this.id_tema        = id_tema;
        this.id_curso_tema  = id_curso_tema;
    }

    public static fromObject( object: { [key: string]: any } ): CursoTemaEntity {

        const { id_curso_tema, id_curso, id_tema } = object;

        return new CursoTemaEntity({ id_curso, id_curso_tema, id_tema });

    }

}