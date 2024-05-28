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
        console.log( stateForm );
    }

    return {
        //* Attributes.
        stateForm,

        //* Methods.
        onInputChange,
        onHandleSubmit
    }

}
