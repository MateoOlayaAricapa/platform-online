// @ts-ignore
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Textfield } from '../../../src/components/textfield/textfield';

// Aplicando un mock a las imágenes para que no haya problema
jest.mock( '../../../src/app/assets/images/esconder.png', () => 'mock-esconder.png' );
jest.mock( '../../../src/app/assets/images/ver.png', () => 'mock-ver.png' );

describe('Pruebas a <Textfield/>', () => {

    test('Debe renderizar un título principal H1', () => { 

        const title = 'Nombre usuario';
        render( <Textfield type='text' title={ title }/> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

    });

    test('Debe renderizar un textArea si se indica en la prop "type"', () => {  

        render( <Textfield type='textArea' title={ 'Type area' }/> );
        const textArea = screen.getByRole("textbox");
        expect( textArea.tagName.toLowerCase() ).toBe('textarea');

    });

    test('Debe renderizar un input si se indica en la prop "type" valores como text, password o email', () => {  

        render( <Textfield type='text' title={ 'Type input' }/> );
        const input = screen.getByRole("textbox");
        expect( input.tagName.toLowerCase() ).toBe('input');

    });

    test('Debe renderizar botón de password si en la prop "type" se pone password', () => { 

        render( <Textfield type='password' title={ 'Type password' }/> );

        expect( screen.getByRole('button') ).toBeTruthy();
        expect( screen.getAllByRole('button').length ).toBe(1);
        expect( screen.getAllByRole('img').length ).toBe(1);
        expect( screen.getByRole('img').getAttribute('src') ).toBe('mock-ver.png');

    });

    test('Debe cambiar el icono ocultar o mostrar password si se da click', () => {  

        render( <Textfield type='password' title={ 'Password' }/> );

        fireEvent.click( screen.getByRole('button', { name: 'btn-password' }) ); // Mostrar contraseña

        expect( screen.getByRole('img').getAttribute('src') ).toBe('mock-esconder.png');
        expect( screen.getByRole('textbox').getAttribute('type') ).toBe('text');

        fireEvent.click( screen.getByRole('button', { name: 'btn-password' }) ); // Ocultar contraseña

        expect( screen.getByRole('img').getAttribute('src') ).toBe('mock-ver.png');

    });

    test('Debe de llamar el onChange() cuando se dispara el evento para cambiar estado', () => { 

        const onChangeMock = jest.fn();

        render( 
        
            <Textfield 
                type='email' 
                title='Correo'
                name='email'
                placeHolder='Ingrese correo'
                value='prueba@gmail.com'
                onChange={ onChangeMock }
            /> 
        );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'mateo@gmail.com' } } );
        expect( onChangeMock ).toHaveBeenCalledTimes(1);

    });

});