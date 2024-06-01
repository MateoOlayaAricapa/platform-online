import { Link } from 'react-router-dom';
import './_menu.scss';

import iconHome from '../../../assets/images/home.png';
import iconCourses from '../../../assets/images/cursos.png';
import iconInstructor from '../../../assets/images/instructor.png';
import iconCommunity from '../../../assets/images/comunidad.png';
import iconLogout from '../../../assets/images/cerrar-sesion.png';

export const Menu = () => {

    return (
        <div className='menu'>
            
            { /* Div que contiene la foto, nombre y correo del usuario */ }
            <div className='menu__userProfile'>

                { /* Div que contiene la foto de perfil */ }
                <div className='menu__userProfile__photo'>
                    <img src="" alt="" />
                </div>

                { /* Div que contiene nombre y correo */ }
                <div className='menu__userProfile__emailName'>
                    <h1>Mateo Olaya Aricapa</h1>
                    <h2>mateo.olaya.aricapa@gmail.com</h2>
                </div>

            </div>

            { /* Div que contiene la lista de opciones menú */ }
            <div className='menu__optionsMenu'>

                <ul>
                    <li>
                        <Link to='/home'>
                            <img src={ iconHome } alt="" />
                            Inicio
                        </Link>
                    </li>

                    <div className='divisor' />

                    <li>
                        <Link to='/my-courses'>
                            <img src={ iconCourses } alt="" />
                            Mis cursos
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/instructor'>
                            <img src={ iconInstructor } alt="" />
                            Instructor
                        </Link>
                    </li>

                    <div className='divisor' />

                    <li>
                        <Link to='/community'>
                            <img src={ iconCommunity } alt="" />
                            Comunidad
                        </Link>
                    </li>

                    <div className='divisor' />

                    <li>
                        <Link to='/logout'>
                            <img src={ iconLogout } alt="" />
                            Cerrar sesión
                        </Link>
                    </li>
                </ul>

            </div>

        </div>
    );

}
