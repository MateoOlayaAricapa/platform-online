import { ValidatedValueTexfield } from "../../../../helpers/validated-textfield";
import { useForm } from "../../../../hooks/useForm"
import { FormLogin } from "../../../interfaces/interfaces";

export const useLogin = () => {

    //* Attributes.
    const { onInputChange, stateForm } = useForm<FormLogin>({
        email: '',
        password: ''
    });

    //* Methods.
    const onHandleSubmit = ( event: React.FormEvent<HTMLFormElement> ): void => {
        event.preventDefault();
        
        const { status, errorMessage } = ValidatedValueTexfield.isValidated( stateForm );
        if ( !status ) return alert( errorMessage );
    }

    return {
        //* Attributes.
        stateForm,

        //* Methods.
        onInputChange,
        onHandleSubmit
    }

}
