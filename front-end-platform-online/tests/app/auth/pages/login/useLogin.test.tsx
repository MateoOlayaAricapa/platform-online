// @ts-ignore
import React, { FormEvent } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useLogin } from '../../../../../src/app/auth/pages/login/useLogin';
import { act, renderHook } from '@testing-library/react';
import { ValidatedValueTexfield } from '../../../../../src/helpers/validated-textfield';

global.alert = jest.fn();

describe('Pruebas a custom hook [useLogin.ts]', () => {  

    test('Debe regresar los valores por defecto', () => {  

        const { result } = renderHook( () => useLogin(), {
            wrapper: ({children}) => <MemoryRouter initialEntries={['/auth/login']}>{ children }</MemoryRouter>
        } );

        expect( result.current ).toEqual({
            stateForm: { email: '', password: '' },
            onInputChange: expect.any(Function),
            onHandleSubmit: expect.any(Function),
            onGoToRegister: expect.any(Function)
        });

    });

    test('onHandleSubmit() debe de llamar la método isValidated de la clase ValidatedValueTexfield', () => {  

        const isValidatedSpyOn = jest.spyOn( ValidatedValueTexfield, 'isValidated' );
        const alertSpyOn = jest.spyOn( global, 'alert' );

        const { result } = renderHook( () => useLogin(), {
            wrapper: ({children}) => <MemoryRouter initialEntries={['/auth/login']}>{ children }</MemoryRouter>
        } );

        const { onHandleSubmit } = result.current;

        const mockEvent = {
            preventDefault: jest.fn()
        } as unknown as FormEvent<HTMLFormElement>;

        //* Ejecutando función onHandleSubmit()
        act(() => {
            onHandleSubmit( mockEvent );
        });

        expect( isValidatedSpyOn ).toHaveBeenCalledTimes(1);
        expect( isValidatedSpyOn ).toHaveBeenCalledWith({"email": "", "password": ""});
        expect( alertSpyOn ).toHaveBeenCalledTimes(1);

        //* Eliminando spyOn
        isValidatedSpyOn.mockRestore();
        alertSpyOn.mockRestore();

    });

});