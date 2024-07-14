import { useNavigate } from "react-router-dom";
import { ValidatedValueTexfield } from "../../../../helpers/validated-textfield";
import { useForm } from "../../../../hooks/useForm"
import { FormLogin } from "../../../interfaces/interfaces";

type FormEvent = React.FormEvent<HTMLFormElement>;

export const useLogin = () => {

    //* Attributes.
    const { onInputChange, stateForm } = useForm<FormLogin>({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    //* Methods.
    const onHandleSubmit = ( event: FormEvent ): void => {
        event.preventDefault();

        const { status, errorMessage } = ValidatedValueTexfield.isValidated( stateForm );
        if ( !status ) return alert( errorMessage );
    }

    const onGoToRegister = (): void => {
        navigate('/auth/register', {
            replace: false
        });
    }

    return {
        //* Attributes.
        stateForm,

        //* Methods.
        onInputChange,
        onHandleSubmit,
        onGoToRegister,
    }

}
