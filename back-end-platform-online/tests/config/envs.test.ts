import { envs } from '../../src/config/plugins/env-plugins';

describe('Pruebas a [env-plugins.ts]', () => {  

    test('Debe retornar las variables de entorno por defecto', () => {  

        expect( envs ).toEqual({ PORT: 4000, SEED: 'Clave_12*@' });

    });

    test('Debe corresponder los tipos de datos para las variables de entorno', () => {  

        expect( typeof envs.PORT ).toBe('number');
        expect( typeof envs.SEED ).toBe('string');

    });

});