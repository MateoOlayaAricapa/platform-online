import './_header.scss';
import { Search } from '../search/search';
import { Menu } from '../menu/menu';
import { useState } from 'react';

import logo from "../../../assets/images/Logo.png";

export const Header = () => {

    const [ canShowMenu, setcanShowMenu ] = useState<boolean>(false);

    const onHandleProcessSearch = ({ valueToSearch }: { valueToSearch: string }) => {
        console.log( valueToSearch );
    }

    const onHandleHoveredMenu = () => {
        setcanShowMenu( prevHovered => !prevHovered );
    }

    return (
        <div className='header'>

            { /* Div que contiene el logo y la componente search */ }
            <div className='header__containerLogoSearch'>
                <img src={ logo } alt="Logo" />
                <Search onSearch={ onHandleProcessSearch }/>
            </div>

            { /* Div que contiene la foto de perfil */ }
            <div className='header__containerPhotoPerfil'>

                <div onMouseEnter={ onHandleHoveredMenu }>
                    <img src="" alt="" />
                </div>

            </div>

            { /* Componente del menú */ }
            { canShowMenu && <Menu onHandleHoveredMenu={ onHandleHoveredMenu }/> }

        </div>
    );

}
