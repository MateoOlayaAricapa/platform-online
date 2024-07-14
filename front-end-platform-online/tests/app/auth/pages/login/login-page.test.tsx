// @ts-ignore
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from '../../../../../src/app/auth/pages/login/login-page';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../../../src/store/slices/auth/auth-slice';
import { MemoryRouter } from 'react-router-dom';
import { ValidatedValueTexfield } from '../../../../../src/helpers/validated-textfield';

// Mocks para iconos
jest.mock('../../../../../src/app/assets/index.ts', () => ({
    iconTime: 'mocked-iconTime.png',
    iconSections: 'mocked-iconSections.png',
    iconClass: 'mocked-iconClass.png',
    iconVideo: 'mocked-iconVideo.png',
    iconImage: 'mocked-iconImage.png',
    iconArrowSelect: 'mocked-iconArrowSelect.png',
    iconAdd: 'mocked-iconAdd.png',
    iconTrash: 'mocked-iconTrash.png',
    iconCorrect: 'mocked-iconCorrect.png',
    iconIncorrect: 'mocked-iconIncorrect.png',
    iconImageInstructor: 'mocked-iconImageInstructor.png',
    iconVideoInstructor: 'mocked-iconVideoInstructor.png',
    iconCalendar: 'mocked-iconCalendar.png',
    iconLanguage: 'mocked-iconLanguage.png',
    iconArrow: 'mocked-iconArrow.png',
}));

jest.mock( '../../../../../src/app/assets/images/ImagenLogin.jpg', () => 'mock-ImagenLogin.png' );
jest.mock( '../../../../../src/app/assets/images/Logo.png', () => 'mock-Logo.png' );
jest.mock( '../../../../../src/app/assets/images/esconder.png', () => 'mock-esconder.png' );
jest.mock( '../../../../../src/app/assets/images/ver.png', () => 'mock-ver.png' );

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    //preloadedState: {
    //    
    //}
});

describe('Pruebas a <LoginPage/>', () => { 

    test('Debe de mostrar el componente correctamente', () => {  

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/login']}>
                    <LoginPage/> 
                </MemoryRouter>
            </Provider>
        );

        expect( screen.getByText('¡Mejora tus habilidades profesionales!') ).toBeTruthy();
        expect( screen.getByText('¿Aún no tienes cuenta?') ).toBeTruthy();
        expect( screen.getAllByRole('img').length ).toBe( 3 );

    });

    test('Debe de llamar la función navigate() con sus argumentos al hacer click botón', () => { 

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/login']}>
                    <LoginPage/> 
                </MemoryRouter>
            </Provider>
        );

        const buttonRegister = screen.getByRole('button', { name: 'Comienza ahora' });

        fireEvent.click( buttonRegister );

        expect( mockUseNavigate ).toHaveBeenCalledWith("/auth/register", {"replace": false});
        expect( mockUseNavigate ).toHaveBeenCalledTimes(1);

    });

    test('La función onHandleSubmit() debe de llamar isValidated() de la clase ValidatedValueTexfield', () => { 

        const email = 'mateo.olaya@gmail.com';
        const password = 'password';

        const isValidatedSpyOn = jest.spyOn( ValidatedValueTexfield, 'isValidated' );

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/login']}>
                    <LoginPage/> 
                </MemoryRouter>
            </Provider>
        );

        const inputs = screen.getAllByRole('textbox');

        const emailField = inputs[0];
        fireEvent.change( emailField, { target: { name: 'email', value: email } } );

        const passwordField = screen.getByPlaceholderText(/Ingresa tu contraseña/i);
        fireEvent.change( passwordField, { target: { name: 'password', value: password } } );

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit( loginForm );
        
        expect( isValidatedSpyOn ).toHaveBeenCalledWith({ 'email': email, 'password': password });
        expect( isValidatedSpyOn ).toHaveBeenCalledTimes(1);

        //* Eliminando spyon
        isValidatedSpyOn.mockRestore();

    });

});