// @ts-ignore
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from '../../../src/components/select/select';
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

describe('Pruebas a <Select/>', () => {

    test('Debe mostrar la componente correctamente sin las opciones', () => { 

        const mockUseSelect = jest.spyOn( require('../../../src/components/select/useSelect'), 'useSelect' );

        mockUseSelect.mockReturnValue({
            isShowOptions: true, 
            onShowListOptions: jest.fn(), 
            selectedOption: 'Selecciona un valor', 
            onHandleSelectOption: jest.fn(),
        });

        render( <Select title='Temas'/> );

        expect( screen.getByText('Temas') ).toBeTruthy();
        expect( screen.getByText('Selecciona un valor') ).toBeTruthy();
        expect( screen.getByRole('img').getAttribute('src') ).toBe('mocked-iconArrowSelect.png');
        expect( screen.getByRole('generic', { name: 'div-select-options' }) ).toBeTruthy();

        // Limpiando spy on
        mockUseSelect.mockRestore();

    });

    test('Debe mostrar el panel de opciones al hacer click en el select', () => {  

        render( <Select title='Temas'/> );

        const divSelect = screen.getByRole('generic', { name: 'div-select' });
        fireEvent.click( divSelect );

        expect( screen.getByRole('generic', { name: 'div-select-options' }) ).toBeTruthy();

    });

    test('Debe mostrar las opciones en el select', () => {  

        render( 
            <Select title='Temas'>
                <Option value='Option 1'/>
                <Option value='Option 2'/>
                <Option value='Option 3'/>
            </Select> 
        );

        // Abriendo panel de opciones
        const divSelect = screen.getByRole('generic', { name: 'div-select' });
        fireEvent.click( divSelect );

        const divPanelOptions = screen.getByRole('generic', { name: 'div-select-options' });
        expect( divPanelOptions.querySelectorAll('.option').length ).toBe(3);

    });

    test('Debe de cambiar item por el seleccionado', () => {  

        render( 
            <Select title='Temas'>
                <Option value='Option 1'/>
                <Option value='Option 2'/>
                <Option value='Option 3'/>
            </Select> 
        );

        // Abriendo panel de opciones
        const divSelect = screen.getByRole('generic', { name: 'div-select' });
        fireEvent.click( divSelect );

        // Obteniendo panel de opciones con sus opciones correspondientes
        const divPanelOptions = screen.getByRole('generic', { name: 'div-select-options' });
        const options = divPanelOptions.querySelectorAll('.option');
        
        fireEvent.click( options[2] );

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe('Option 3');

    });

    test('Debe de llamar el onChange() al seleccionar una opción', () => {  

        const mockOnChange = jest.fn();

        render( 
            <Select title='Temas' onChange={ mockOnChange } name='topic'>
                <Option value='Option 1'/>
                <Option value='Option 2'/>
                <Option value='Option 3'/>
            </Select> 
        );

        // Abriendo panel de opciones
        const divSelect = screen.getByRole('generic', { name: 'div-select' });
        fireEvent.click( divSelect );

        // Obteniendo panel de opciones con sus opciones correspondientes
        const divPanelOptions = screen.getByRole('generic', { name: 'div-select-options' });
        const options = divPanelOptions.querySelectorAll('.option');
        
        fireEvent.click( options[2] );

        expect( mockOnChange ).toHaveBeenCalledTimes(1);
        expect( mockOnChange ).toHaveBeenCalledWith({"name": "topic", "value": "Option 3"});

    });

});