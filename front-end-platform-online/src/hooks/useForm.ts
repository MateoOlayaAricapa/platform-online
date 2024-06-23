import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialStateForm: T ) => {
  
    //* Attributes.
    const [ stateForm, setStateForm ] = useState( initialStateForm );

    //* Methods.
    const onInputChange = ( { target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        const { value, name } = target;
        setStateForm({ ...stateForm, [name]: value });
    }

    const onInputChangeSelect = ( { name, value }: { value: string; name: string } ): void => {
        setStateForm({ ...stateForm, [name]: value });
    }

    const onChangeForm = ( { name, value }: { value: any; name: string } ): void => {
        setStateForm({ ...stateForm, [name]: value });
    }

    const onInputReset = (): void => {
        setStateForm({ ...initialStateForm });
    }

    //* Other functions
    const onAddNewAttribute = ( name: string, value: string ): void => {
        setStateForm({ ...stateForm, [name]: value });
    }

    const onDeleteAttribute = ( name: keyof T ): void => {

        const { [name]: toDelete, ...newForm } = stateForm;
        setStateForm( newForm as T );

    }

    return {
        //* Attributes.
        stateForm,
        
        //* Methods.
        onInputChange,
        onChangeForm,
        onInputChangeSelect,
        onInputReset,
        onAddNewAttribute,
        onDeleteAttribute
    }

}
