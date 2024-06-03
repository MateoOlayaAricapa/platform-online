import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialStateForm: T ) => {
  
    //* Attributes.
    const [ stateForm, setStateForm ] = useState( initialStateForm );

    //* Methods.
    const onInputChange = ( { target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        const { value, name } = target;
        setStateForm({ ...stateForm, [name]: value });
    }

    const onInputReset = (): void => {
        setStateForm({ ...initialStateForm });
    }

    return {
        //* Attributes.
        stateForm,
        
        //* Methods.
        onInputChange,
        onInputReset
    }

}
