import { useForm } from "../../../../hooks/useForm"
import { FormRegister, ListTextFields } from "../../../interfaces/interfaces";

export const useRegister = () => {
  
    //* Attributes.
    const { onInputChange, stateForm } = useForm<FormRegister>({
        email: '',
        name: '',
        password: '',
        surnames: ''
    });

    const textfields: ListTextFields[] = [
        { 
            title: 'Nombres', 
            type: 'text', 
            value: stateForm.name, 
            name: 'name', 
            placeHolder: 'Ingresa tus nombres', 
            onChange: onInputChange 
        },
        { 
            title: 'Apellidos', 
            type: 'text', 
            value: stateForm.surnames, 
            name: 'surnames', 
            placeHolder: 'Ingresa tus apellidos', 
            onChange: onInputChange 
        },
        { 
            title: 'Correo electrónico', 
            type: 'email', 
            value: stateForm.name, 
            name: 'email', 
            placeHolder: 'Ingresa tu correo', 
            onChange: onInputChange 
        },
        { 
            title: 'Contraseña', 
            type: 'password', 
            value: stateForm.password, 
            name: 'password', 
            placeHolder: 'Ingresa tu contraseña', 
            onChange: onInputChange 
        },
    ];

    //* Methods.
    const onHandleSubmitRegister = ( event: React.FormEvent<HTMLFormElement> ): void => {

        event.preventDefault();

        console.log( stateForm );

    }

    return {
        //* Attributes.
        stateForm,
        textfields,

        //* Methods.
        onInputChange,
        onHandleSubmitRegister,
    }

}
