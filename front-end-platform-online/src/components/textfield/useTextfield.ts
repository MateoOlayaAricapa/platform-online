import { useState } from "react";

export const useTextfield = ( type: string ) => {
  
    //* Attributes.
    const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
    const [typeInput, setTypeInput] = useState(type);

    //* Methods.
    const onHandleButtonPassword = () => {
        
        const valueToChange = !isShowPassword;

        setIsShowPassword( valueToChange );
        
        ( valueToChange ) ? setTypeInput('password') : setTypeInput('text');

    }

    return {
        //* Attributes.
        isShowPassword,
        typeInput,

        //* Methods.
        onHandleButtonPassword
    }

}
