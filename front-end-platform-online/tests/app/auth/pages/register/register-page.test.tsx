// @ts-ignore
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../../../src/store/slices/auth/auth-slice';
import RegisterPage from '../../../../../src/app/auth/pages/register/register-page';
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

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

global.alert = jest.fn();

describe('Pruebas a <RegisterPage/>', () => {  

    test('Debe de mostrar el componente correctamente', () => {  

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/register']}>
                    <RegisterPage/>
                </MemoryRouter>
            </Provider>
        );

        expect( screen.getByText('¡Registrate para tener una cuenta!') ).toBeTruthy();
        expect( screen.getByText('¿Ya tienes una cuenta?') ).toBeTruthy();
        expect( screen.getAllByRole('img').length ).toBe(2);
        expect( screen.getAllByRole('button').length ).toBe(3);
        expect( screen.getByRole('button', { name: 'btn-register-page' }) ).toBeTruthy();

    });

    test('Debe de llamar el navigate() al hacer click en el botón [inicia sesion ahora]', () => {  

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/register']}>
                    <RegisterPage/>
                </MemoryRouter>
            </Provider>
        );

        const allButtons = screen.getAllByRole('button');
        const buttonGoToLogin = allButtons[2];

        fireEvent.click( buttonGoToLogin );

        expect( mockUseNavigate ).toHaveBeenCalledTimes(1);
        expect( mockUseNavigate ).toHaveBeenCalledWith("/auth/login", {"replace": false});

    });

    test('La función onHandleSubmitRegister() debe de llamar el método isValidated() de la clase ValidatedValueTexfield', () => {  

        const userRegister = {
            name: 'Mateo',
            surname: 'Olaya Aricapa',
            email: 'mateo@gmail.com',
            password: 'password'
        };

        const { email, name, password, surname } = userRegister;

        const isValidatedSpyOn = jest.spyOn( ValidatedValueTexfield, 'isValidated' );

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/register']}>
                    <RegisterPage/>
                </MemoryRouter>
            </Provider>
        );

        //* Rellenando los inputs con datos
        const inputs = screen.getAllByRole('textbox');

        const nameField = inputs[0];
        const surnameField = inputs[1];
        const emailField = inputs[2];
        const passwordField = screen.getByPlaceholderText(/Ingresa tu contraseña/i);

        fireEvent.change( nameField, { target: { name: 'name', value: name } } );
        fireEvent.change( surnameField, { target: { name: 'surnames', value: surname } } );
        fireEvent.change( emailField, { target: { name: 'email', value: email } } );
        fireEvent.change( passwordField, { target: { name: 'password', value: password } } );

        const formRegister = screen.getByLabelText('form-register');
        fireEvent.submit( formRegister );

        expect( isValidatedSpyOn ).toHaveBeenCalledTimes(1);
        expect( isValidatedSpyOn ).toHaveBeenCalledWith({"email": email, "name": name, "password": password, "surnames": surname});

        //* Eliminando spyOn
        isValidatedSpyOn.mockRestore();

    });

    test('Debe mostrar una ventana de error al ejecutar el onHandleSubmitRegister() si al menos un campo está vacío', () => { 

        const alertSpyOn = jest.spyOn( global, 'alert' );

        render(
            <Provider store={ store }>
                <MemoryRouter initialEntries={['/auth/register']}>
                    <RegisterPage/>
                </MemoryRouter>
            </Provider>
        );

        const formRegister = screen.getByLabelText('form-register');
        fireEvent.submit( formRegister );

        expect( alertSpyOn ).toHaveBeenCalledWith("field [ email ] empty");
        expect( alertSpyOn ).toHaveBeenCalledTimes(1);

    });

});