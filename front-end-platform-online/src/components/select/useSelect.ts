import { useEffect, useState } from "react";
import { OnChangeArgs } from "./interface/interface";

interface UseSelectParams {
    name?         : string;
    initialValue? : string;
    onChange?     : ( args: OnChangeArgs ) => void;
}

export const useSelect = ( { name = 'select', onChange, initialValue = 'Selecciona' }: UseSelectParams ) => {

    //* Attributes.
    const [ isShowOptions, setisShowOptions ] = useState<boolean>( false );
    const [ selectedOption, setSelectedOption ] = useState<string>( initialValue );

    //* Methods.
    const onShowListOptions = (): void => {
        setisShowOptions( !isShowOptions );
    }

    const onHandleSelectOption = ( value: string ): void => {
        setSelectedOption( value );

        onChange && onChange({ value, name });
    }

    //* useEffect
    useEffect(() => {
      
        setSelectedOption( initialValue );

    }, [ initialValue ]);

    return {
        //* Attributes.
        isShowOptions,
        selectedOption,

        //* Methods.
        onShowListOptions,
        onHandleSelectOption
    }
    
}
