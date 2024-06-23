import { useEffect } from "react";
import { useCounter } from "../../../../../../hooks/useCounter";
import { useForm } from "../../../../../../hooks/useForm";
import { useTextfieldsDynamics } from "../../../../../../hooks/useTextfieldsDynamics";
import { OnChangeRequirements } from "./section-requirements";

interface FormRequirements {
    requirementPoint1: string;
    [key: string]    : string;
}

interface TextfieldRequirements {
    id  : number;
    name: string;
}

interface UseSectionRequirementsParams {
    onChange?: ( args: OnChangeRequirements ) => void;
}

export const useSectionRequirements = ( { onChange }: UseSectionRequirementsParams ) => {

    //* Attributes.
    const { onAddNewAttribute, onDeleteAttribute, onInputChange, stateForm } = useForm<FormRequirements>({
        requirementPoint1: ''
    });
    
    const { onAddNewTextfield, onDeleteTextfield, textfields } = useTextfieldsDynamics<TextfieldRequirements>();

    const { count, increment } = useCounter(2);

    //* Methods.
    const onHandleCreateRequirements = (): void => {

        onAddNewAttribute( `requirementPoint${ count }`, '' );

        onAddNewTextfield({
            id: count, 
            name: `requirementPoint${ count }`
        });

        increment();
        
    }

    const onHandleDeleteRequirements = ( name: string, id: number ): void => {
        onDeleteAttribute( name );
        onDeleteTextfield( id );
    }

    //* useEffect.
    useEffect(() => {

        onChange && onChange( stateForm );

    }, [ stateForm ]);
    
    return {
        //* Attributes.
        stateForm,
        textfields,

        //* Methods.
        onInputChange,
        onHandleCreateRequirements,
        onHandleDeleteRequirements
    }

}
