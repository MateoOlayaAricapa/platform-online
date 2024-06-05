import { useCounter } from "../../../../../../hooks/useCounter";
import { useForm } from "../../../../../../hooks/useForm";
import { useTextfieldsDynamics } from "../../../../../../hooks/useTextfieldsDynamics";

interface FormLearning {
    [ key: string ]: string;
}

interface TextfieldLearning {
    id   : number;
    name : string;
    value: string;
}

export const useSectionLearning = () => {

    //* Attributes.
    const { onInputChange, stateForm, onAddNewAttribute, onDeleteAttribute } = useForm<FormLearning>({
        learningPoint1: ''
    });

    const { onAddNewTextfield, textfields, onDeleteTextfield } = useTextfieldsDynamics<TextfieldLearning>();
    const { count, increment } = useCounter(2);

    //* Methods.
    const onHandleCreateLearnings = (): void => {
        
        onAddNewAttribute( `learningPoint${ count }`, '' );

        onAddNewTextfield({  
            id: count,
            name: `learningPoint${ count }`,
            value: stateForm[`learningPoint${ count }`]
        });
        
        increment();

    }

    const onHandleDeleteLearnings = ( nameAttribute: string, id: number ): void => {

        onDeleteAttribute( nameAttribute );
        onDeleteTextfield( id );

    }

    return {
        //* Attributes.
        stateForm,
        textfields,

        //* Methods.
        onInputChange,
        onHandleCreateLearnings,
        onHandleDeleteLearnings
    }

}
