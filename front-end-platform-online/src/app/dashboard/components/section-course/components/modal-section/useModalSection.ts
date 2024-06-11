import { useContext, useState } from "react";
import { useForm } from "../../../../../../hooks/useForm"
import { SectionCourseContext } from "../../section-course";
import { v4 } from "uuid";
import { Classes } from "../../interface/interface";
import { ValidatedValueTexfield } from "../../../../../../helpers/validated-textfield";

interface UseModalSectionParams {
    onOpenCloseModal: () => void;
}

export const useModalSection = ( { onOpenCloseModal }: UseModalSectionParams ) => {

    //* Attributes.
    const { onInputChange, onInputChangeSelect, stateForm } = useForm<Classes>({
        id: v4(),
        title: '',
        typeContent: '',
        urlContent: ''
    });

    const { onHandleAddNewClass } = useContext( SectionCourseContext );

    const [ errorForm, setErrorForm ] = useState<string>();

    //* Methods.
    const onHandleCreateClass = ( id: string ) => {

        const { status, errorMessage } = ValidatedValueTexfield.isValidated( stateForm );

        if ( !status ) {
            setErrorForm( errorMessage );
            return;
        }

        onHandleAddNewClass( id, stateForm );
        onOpenCloseModal();
        
    }

    const onHandleCloseErrorModal = () => {
        setErrorForm( undefined );
    }

    return {
        //* Attributes.
        stateForm,
        errorForm,

        //* Methods.
        onInputChange,
        onHandleCreateClass,
        onInputChangeSelect,
        onHandleCloseErrorModal
    }

}
