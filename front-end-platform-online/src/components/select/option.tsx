import { useContext } from 'react';
import './_option.scss';
import { SelectContext } from './select';

interface OptionProps {
    value: string;
}

export const Option = ( { value }: OptionProps ) => {

    const { onHandleSelectOption, styleOption, classNameOption } = useContext( SelectContext );

    return (
        <div 
            className={ `option ${ classNameOption || '' }` }
            onClick={ () => onHandleSelectOption( value ) } 
            style={ styleOption }
            aria-label='div-option'
        >
            <h2>{ value }</h2>
        </div>
    );

}
