export class CustomError extends Error {

    private constructor(
        public readonly statusCode: number,
        public readonly message: string
    ){
        super( message );
    }

    //* Creando métodos estáticos que definen errores personalizados
    //* Cada uno regresa un error en particular
    static badRequest( message: string ) {
        return new CustomError( 400, message );
    }

    static unAuthorized( message: string ) {
        return new CustomError( 401, message );
    }

    static forBidden( message: string ) {
        return new CustomError( 403, message );
    }

    static notFound( message: string ) {
        return new CustomError( 404, message );
    }

    static internalServer( message: string ) {
        return new CustomError( 500, message );
    }

}