// @ts-ignore
import React, { Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from '../../src/router/app-router';
import { MemoryRouter } from 'react-router-dom';
import { Loading } from '../../src/app/dashboard/components';

// Mocks para iconos
jest.mock('../../src/app/assets/index.ts', () => ({
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

jest.mock( '../../src/app/assets/images/ImagenLogin.jpg', () => 'mock-ImagenLogin.png' );
jest.mock( '../../src/app/assets/images/Logo.png', () => 'mock-Logo.png' );
jest.mock( '../../src/app/assets/images/esconder.png', () => 'mock-esconder.png' );
jest.mock( '../../src/app/assets/images/ver.png', () => 'mock-ver.png' );
jest.mock( '../../src/app/assets/images/lupa.png', () => 'mock-lupa.png' );
jest.mock( '../../src/app/assets/images/cerrar.png', () => 'mock-cerrar.png' );
jest.mock( '../../src/app/assets/images/home.png', () => 'mock-home.png' );
jest.mock( '../../src/app/assets/images/cursos.png', () => 'mock-cursos.png' );
jest.mock( '../../src/app/assets/images/instructor.png', () => 'mock-instructor.png' );
jest.mock( '../../src/app/assets/images/comunidad.png', () => 'mock-comunidad.png' );
jest.mock( '../../src/app/assets/images/cerrar-sesion.png', () => 'mock-cerrarSesion.png' );

jest.mock('../../src/hooks/useAuthStore');

describe('Pruebas a <AppRouter/>', () => {
    
    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar la página de login si el usuario no está autenticado', async() => { 

        const mockUseAuthStore = ( useAuthStore as jest.Mock );

        mockUseAuthStore.mockReturnValue({
            status: 'no-authenticated'
        });

        const { getByText, getAllByRole } = render(
            <Suspense fallback={ <Loading/> }>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </Suspense>  
        );

        await waitFor(() => {

            expect( getByText('¡Mejora tus habilidades profesionales!') ).toBeTruthy();
            expect( getByText('¿Aún no tienes cuenta?') ).toBeTruthy();
            expect( getAllByRole('img').length ).toBe( 3 );

        });

    });

    test('Debe de mostrar la página de "Home" del dashboard cuando el usuario está autenticado', async() => {  

        const mockUseAuthStore = ( useAuthStore as jest.Mock );

        mockUseAuthStore.mockReturnValue({
            status: 'authenticated'
        });

        const { getByText } = render(
            <Suspense fallback={ <Loading/> }>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </Suspense>  
        );

        await waitFor(() => {

            expect( getByText('Todos los cursos') ).toBeTruthy();

            screen.debug();

        });

    });

});