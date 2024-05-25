import { ChangeEventHandler } from 'react';
import './_textfield.scss';

import { useTextfield } from './useTextfield';

import closedEyes from '../../app/assets/images/esconder.png';
import openEyes from '../../app/assets/images/ver.png';

interface TextfieldProps {
    type        : 'password' | 'text' | 'checkbox' | 'email';
    title?      : string;
    className?  : string;
    value?      : string;
    name?       : string;
    placeHolder?: string;
    onChange?   : ChangeEventHandler<HTMLInputElement>;
}

export const Textfield = ( props: TextfieldProps ) => {
    
    const { type, className, name, onChange, title, value, placeHolder } = props;

    const { isShowPassword, onHandleButtonPassword, typeInput } = useTextfield( type );

    return (
        <div className={ `textfield ${ className ? className : '' }` }>

            <h1>{ title }</h1>

            <div>

                <input 
                    type={ typeInput }
                    value={ value }
                    placeholder={ placeHolder }
                    onChange={ onChange } 
                    name={ name } 
                />

                {
                    ( type === 'password' ) && (
                        <button type='button'>
                            <img 
                                src={ isShowPassword ? openEyes : closedEyes } 
                                alt={ `${ isShowPassword ? 'Icono de mostrar' : 'Icono de ocultar' }` }
                                onClick={ onHandleButtonPassword } 
                            />
                        </button>
                    )
                }
            
            </div>

        </div>
    );

}
