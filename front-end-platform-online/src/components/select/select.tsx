import { createContext } from 'react';
import { useSelect } from './useSelect';
import { SelectContextProps, SelectProps } from './interface/interface';

import './_select.scss';
import { iconArrowSelect } from '../../app/assets';

export const SelectContext = createContext( {} as SelectContextProps );
const { Provider } = SelectContext;

export const Select = ( { children, className, classNameOption, initialValue, name, onChange, styleListOptions, styleOption, title }: SelectProps ) => {

    const { 
        isShowOptions, 
        onShowListOptions, 
        selectedOption, 
        onHandleSelectOption 
    } = useSelect({ name, onChange, initialValue });

    return (
        <Provider value={ { onHandleSelectOption, styleOption, classNameOption } }>
            <div className={ `select ${ className || '' }` }>
                
                <h1>{ title }</h1>

                <div className='select__option' onClick={ onShowListOptions }>
                    
                    <h2>{ selectedOption }</h2>
                    <img src={ iconArrowSelect } alt="Arrow select"/>

                    {
                        ( isShowOptions ) && (
                            <div 
                                className='select__option__listOptions' 
                                onMouseLeave={ onShowListOptions }
                                style={ styleListOptions }
                            >

                                { children }

                            </div>
                        )
                    }

                </div>

            </div>
        </Provider>
    );

}
