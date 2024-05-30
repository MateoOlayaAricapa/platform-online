import './_header.scss';
import { Search } from '../search/search';

import logo from "../../../assets/images/Logo.png";

export const Header = () => {

    const onHandleProcessSearch = ({ valueToSearch }: { valueToSearch: string }) => {
        console.log( valueToSearch );
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

                <div>
                    <img src="" alt="" />
                </div>

            </div>

        </div>
    );

}
