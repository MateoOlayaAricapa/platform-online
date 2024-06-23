import { useState } from "react";

export const useTextfieldsDynamics = <T extends { id: number }>( initialStateTextfields: T[] = [] ) => {

    //* Attributes.
    const [ textfields, setTextfields ] = useState<T[]>( initialStateTextfields );

    //* Methods.
    const onAddNewTextfield = ( newTextfield: T ): void => {

        setTextfields( [ ...textfields, { ...newTextfield } ] );

    }

    const onDeleteTextfield = ( id: number ): void => {

        const newTextfields = textfields.filter( textfield => textfield.id !== id );

        setTextfields( newTextfields );

    }

    return {
        //* Attributes.
        textfields,

        //* Methods.
        onAddNewTextfield,
        onDeleteTextfield,
    }

}
