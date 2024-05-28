import './_login-page.scss';

import imageLogin from "../../../assets/images/ImagenLogin.jpg";
import logo from "../../../assets/images/Logo.png";

import { Textfield } from '../../../../components/textfield/textfield';
import { useLogin } from './useLogin';
import { ErrorMessage } from '../../components/error/errorMessage';

export const LoginPage = () => {

    const { onInputChange, stateForm, onHandleSubmit, onGoToRegister } = useLogin();

    return (
        <div className="loginPage auth">
            
            <div className='loginPage__container'>

                <div className='loginPage__container__img'>
                    <img src={ imageLogin } alt="Imagen del login" />
                </div>

                <div className='loginPage__container__processLogin'>

                    <img src={ logo } alt="logo" />

                    <div className='loginPage__container__processLogin__titles'>
                        <h1>¡Mejora tus habilidades profesionales!</h1>
                        <p>
                            Encuentra cursos con los temas que quieres aprender 
                            más para tu crecimiento profesional dentro de tu empresa.
                        </p>
                    </div>

                    <form onSubmit={ onHandleSubmit }>
                        
                        { false && <ErrorMessage/> }

                        <Textfield 
                            type='email'
                            title='Correo electrónico'
                            placeHolder='Ingresa tu correo'
                            value={ stateForm.email }
                            onChange={ onInputChange }
                            name='email'
                        />

                        <Textfield 
                            type='password'
                            title='Contraseña'
                            placeHolder='Ingresa tu contraseña'
                            value={ stateForm.password }
                            onChange={ onInputChange }
                            name='password'
                        />

                        <button type='submit' className='style-button'>
                            Iniciar sesión
                        </button>

                    </form>

                    <div className='loginPage__container__processLogin__register'>

                        <h1>¿Aún no tienes cuenta?</h1>

                        <button type='button' className='style-button' onClick={ onGoToRegister }>
                            Comienza ahora
                        </button>
                        
                    </div>

                </div>

            </div>

        </div>
    )

}
