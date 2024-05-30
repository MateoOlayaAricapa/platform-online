import { useEffect, useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { OnSearchArgs } from "../../../interfaces/interfaces";

interface UseSearchParams {
    onSearch: ( args: OnSearchArgs ) => void;
}

export const useSearch = ( { onSearch }: UseSearchParams ) => {
 
    //* Attributes.
    const [ canShowButtonClosed, setCanShowButtonClosed ] = useState<boolean>( false );

    const { onInputChange, onInputReset, stateForm } = useForm<{ valueToSearch: string }>({
        valueToSearch: '',
    });

    //* Methods.
    const onHandleDeleteValueSearch = (): void => {
        onInputReset();
    }

    const onHandleSearch = (): void => {
        onSearch({ valueToSearch: stateForm.valueToSearch });
    }

    //* useEffect.
    useEffect(() => {

        if ( stateForm.valueToSearch.length === 0 ) return setCanShowButtonClosed( false );
       
        setCanShowButtonClosed( true );

    }, [ stateForm ]);


    return {
        //* Attributes.
        canShowButtonClosed,
        stateForm,

        //* Methods.
        onInputChange,
        onHandleDeleteValueSearch,
        onHandleSearch,
    }

}
