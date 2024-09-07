import { useNavigate } from "react-router-dom";
import { ValidatedValueTexfield } from "../../../../helpers/validated-textfield";
import { useForm } from "../../../../hooks/useForm"
import { FormLogin } from "../../../interfaces/interfaces";
import { useAuthStore } from "../../../../hooks/useAuthStore";

type FormEvent = React.FormEvent<HTMLFormElement>;

export const useLogin = () => {

    //* Attributes.
    const navigate = useNavigate();

    const { onInputChange, stateForm } = useForm<FormLogin>({
        email: '',
        password: ''
    });
    const { onHandleLoginAuth, onHandleErrorAuth, error, isLoadingAuth } = useAuthStore();

    //* Methods.
    const onHandleSubmit = ( event: FormEvent ): void => {
        event.preventDefault();

        const { status, errorMessage } = ValidatedValueTexfield.isValidated( stateForm );

        if ( !status ){
            onHandleErrorAuth( errorMessage! );
            return;
        }

        onHandleLoginAuth( stateForm );
    }

    const onGoToRegister = (): void => {
        navigate('/auth/register', {
            replace: false
        });
    }

    return {
        //* Attributes.
        stateForm,
        error,
        isLoadingAuth,

        //* Methods.
        onInputChange,
        onHandleSubmit,
        onGoToRegister,
    }

}
