import { envs } from "./config";
import { GlobalRoutes, ServerApp } from "./presentation";

//* Función auto-invocada
(() => {

    main();

})();

function main() {

    const serverApp = new ServerApp({
        PORT: envs.PORT,
        ROUTES: GlobalRoutes.routes
    });

    serverApp.start();

}
