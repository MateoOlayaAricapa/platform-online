import './_modal-message.scss';

import { useModalMessage } from './useModalMessage';

interface ModalMessageProps {
    type    : 'success' | 'problem' | 'alert' | 'message';
    title   : string;
    message?: string;
    onClosed: () => void;
}

export const ModalMessage = ( { type, title, message, onClosed }: ModalMessageProps ) => {

    const { selectIconByType, selectColorByType } = useModalMessage({ type });

    return (
        <div className='modalMessage'>

            <div className='modalMessage__container'>

                <img src={ selectIconByType() } alt="" />

                <div className='modalMessage__container__contentText'>
                    <h1>{ title }</h1>
                    <p style={{ display: message ? 'inherit' : 'none' }}> { message } </p>
                </div>

                <div className='modalMessage__container__buttons'>

                    <button 
                        type='button' 
                        style={{ backgroundColor: selectColorByType() }}
                        onClick={ onClosed }
                    >
                        Cerrar
                    </button>

                </div>

            </div>

        </div>
    );

}
