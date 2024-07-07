// @ts-ignore
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Option } from '../../../src/components/select/option';

// Mocks para iconos
jest.mock('../../../src/app/assets/index.ts', () => ({
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

describe('Pruebas a <Option/>', () => { 

    test('Debe renderizar el título de la opción', () => { 

        const titleOption = 'Option 1';

        render( <Option value={ titleOption }/> );

        expect( screen.getByText( titleOption ) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe( titleOption )

    });

    test('Debe de llamar la función onHandleSelectOption() al hacer click en la opción', () => {  

        const mockOnHandleSelectOption = jest.fn();
        const mockUseContext = jest.spyOn( React, 'useContext' );

        mockUseContext.mockReturnValue({
            onHandleSelectOption: mockOnHandleSelectOption, 
            styleOption: undefined, 
            classNameOption: undefined,
        });

        render( <Option value='Option prueba'/> );

        const divOption = screen.getByRole( 'generic', { name: 'div-option' } );

        fireEvent.click( divOption ); // Haciendo click en el div donde está la opción

        expect( mockOnHandleSelectOption ).toHaveBeenCalledWith("Option prueba");
        expect( mockOnHandleSelectOption ).toHaveBeenCalledTimes(1);

    });

});