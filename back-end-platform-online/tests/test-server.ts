import { ServerApp } from '../src/presentation/serverApp';
import { envs } from '../src/config/plugins/env-plugins';
import { GlobalRoutes } from '../src/presentation/global-routes';

export const testServer = new ServerApp({
    PORT: envs.PORT,
    ROUTES: GlobalRoutes.routes,
});
