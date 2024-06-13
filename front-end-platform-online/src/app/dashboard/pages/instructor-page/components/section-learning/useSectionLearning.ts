import { useCounter } from "../../../../../../hooks/useCounter";
import { useForm } from "../../../../../../hooks/useForm";
import { useTextfieldsDynamics } from "../../../../../../hooks/useTextfieldsDynamics";
import { useEffect } from 'react';
import { OnChangeLearning } from "./section-learning";

interface FormLearning {
    [ key: string ]: string;
}

interface TextfieldLearning {
    id   : number;
    name : string;
    value: string;
}

interface UseSectionLearningParams {
    onChange?: ( args: OnChangeLearning ) => void;
}

export const useSectionLearning = ( { onChange }: UseSectionLearningParams ) => {

    //* Attributes.
    const { stateForm, onInputChange, onAddNewAttribute, onDeleteAttribute } = useForm<FormLearning>({
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

    //* useEffect
    useEffect(() => {

        onChange && onChange( stateForm );

    }, [ stateForm ]);
    
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
