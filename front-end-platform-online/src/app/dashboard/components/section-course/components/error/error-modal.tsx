import './_error-modal.scss';

interface ErrorModalProps {
    message      : string;
    onClosedError: () => void;
}

export const ErrorModal = ( { message, onClosedError }: ErrorModalProps ) => {

    return (
        <div className="errorModal">

            <h1>{ message }</h1>
            <button className='style-button' type='button' onClick={ onClosedError }>
                Cerrar
            </button>

        </div>
    );

}
