import { useContext, useState } from "react";
import { SectionCourseContext } from "../../section-course";

export const useSection = () => {
 
    //* Attributes.
    const [ canShowClasses, setCanShowClasses ] = useState(false);
    const [ canOpenModal, setCanOpenModal ] = useState(false);

    const { classNameSection, typeOfUse, onHandleDeleteSection } = useContext( SectionCourseContext );

    //* Methods.
    const onHandleShowClasses = (): void => {
        setCanShowClasses( !canShowClasses );
    }

    const onHandleOpenClosedModal = (): void => {
        setCanOpenModal( !canOpenModal );
    }

    return {
        //* Attributes.
        canShowClasses,
        canOpenModal,
        typeOfUse,
        classNameSection,

        //* Methods.
        onHandleShowClasses,
        onHandleOpenClosedModal,
        onHandleDeleteSection,
    }

}
