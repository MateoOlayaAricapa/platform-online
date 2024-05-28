import './_search.scss';

import iconSearch from '../../../assets/images/lupa.png';
import iconClosed from '../../../assets/images/cerrar.png';
import { useSearch } from './useSearch';
import { OnSearchArgs } from '../../../interfaces/interfaces';

interface SearchProps {
    className?: string;
    onSearch: ( args: OnSearchArgs ) => void;
}

export const Search = ( { className, onSearch }: SearchProps ) => {

    const { 
        canShowButtonClosed, 
        onInputChange, 
        stateForm, 
        onHandleDeleteValueSearch,
        onHandleSearch 
    } = useSearch({ onSearch });

    return (
        <div className={ `search ${ className }` }>

            <button onClick={ onHandleSearch }>
                <img src={ iconSearch } alt="icono para botón buscar" />
            </button>

            <input
                className='style-input' 
                type="text" 
                name="valueToSearch"
                value={ stateForm.valueToSearch }
                onChange={ onInputChange }
                placeholder='Busca cualquier curso'
            />

            {
                canShowButtonClosed && (
                    <button onClick={ onHandleDeleteValueSearch }>
                        <img src={ iconClosed } alt="icono para cerrar botón" />
                    </button>
                )
            }

        </div>
    );

}
