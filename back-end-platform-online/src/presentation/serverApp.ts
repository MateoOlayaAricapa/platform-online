import express, { Router } from 'express';

interface ServerOptions {
    PORT    : number;
    ROUTES  : Router;
}

export class ServerApp {

    public readonly app = express();
    private readonly port   : number;
    private readonly routes : Router;
    private serverListener? : any;

    constructor( options: ServerOptions ){
        const { PORT, ROUTES } = options;
        this.port = PORT;
        this.routes = ROUTES;
    }

    async start() {

        //* Middlewares
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );

        //* GlobalRoutes
        this.app.use( this.routes );

        //* Ejecución del servidor
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${ this.port }`);
        });

    }

    async close() {
        this.serverListener?.close();
    }

}