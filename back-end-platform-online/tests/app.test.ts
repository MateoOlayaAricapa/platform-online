import { envs } from '../src/config';
import { ServerApp } from '../src/presentation/serverApp';

jest.mock('../src/presentation/serverApp');

describe('Pruebas a [app.ts]', () => {  

    test('Debe llamar el serveApp con argumentos y start', async() => { 

        await import('../src/app');

        expect( ServerApp ).toHaveBeenCalledTimes(1);
        expect( ServerApp ).toHaveBeenCalledWith({ PORT: envs.PORT, ROUTES: expect.any(Function) });
        expect( ServerApp.prototype.start ).toHaveBeenCalled();

    });

});