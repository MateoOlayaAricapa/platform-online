import './_register.scss';

import { Textfield } from '../../../../components/textfield/textfield';
import { useRegister } from './useRegister';

import logo from ".././../../assets/images/Logo.png";
import { ErrorMessage } from '../../components/error/errorMessage';

export const RegisterPage = () => {

    const { onHandleSubmitRegister, textfields, onGoToLogin } = useRegister();

    return (
        <div className='registerPage auth'>

            { /* Div que contiene todo el register */ }
            <div className='registerPage__container'>

                { /* Div que contiene el título y el logo */ }
                <div className='registerPage__container__logoTitle'>
                    <img src={ logo } alt="Logo" />
                    <h1>¡Registrate para tener una cuenta!</h1>
                </div>

                { /* form que contiene los textfileds para registrarse */ }
                <form onSubmit={ onHandleSubmitRegister }>

                    { false && <ErrorMessage/> }

                    {
                        textfields.map(({ type, name, onChange, placeHolder, title, value }) => (
                            <Textfield
                                key={ name }
                                title={ title }
                                type={ type }
                                value={ value }
                                name={ name }
                                placeHolder={ placeHolder }
                                onChange={ onChange }
                            />
                        ))
                    }

                    <button type='submit' className='style-button'>
                        Registrarse
                    </button>

                </form>

                { /* Div que permite ir a la página de iniciar sesión */ }
                <div className='registerPage__container__login'>

                    <h1>¿Ya tienes una cuenta?</h1>

                    <button type='button' className='style-button' onClick={ onGoToLogin }>
                        Inicia sesión ahora
                    </button>
                    
                </div>

            </div>

        </div>
    );

}

export default RegisterPage;