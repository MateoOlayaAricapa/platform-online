import { useCounter } from "../../../../../../hooks/useCounter";
import { useForm } from "../../../../../../hooks/useForm";
import { useTextfieldsDynamics } from "../../../../../../hooks/useTextfieldsDynamics";

interface FormRequirements {
    requirementPoint1: string;
    [key: string]    : string;
}

interface TextfieldRequirements {
    id  : number;
    name: string;
}

export const useSectionRequirements = () => {

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
