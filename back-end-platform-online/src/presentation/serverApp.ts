import express, { Router } from 'express';

interface ServerOptions {
    PORT    : number;
    ROUTES  : Router;
}

export class ServerApp {

    private app = express();
    private readonly port   : number;
    private readonly routes : Router;

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
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${ this.port }`);
        }); 

    }

}