import { useAuthStore } from '../../../../hooks/useAuthStore';
import './_errorMessage.scss';

interface Params {
    message: string;
}

export const ErrorMessage = ( { message }: Params ) => {

    const { onHandleErrorAuth } = useAuthStore();

    return (
        <div className="errorMessage">

            <h1>{ message }</h1>
            <button className='style-button' onClick={ () => onHandleErrorAuth( undefined ) }>
                Cerrar
            </button>
            
        </div>
    )

}
