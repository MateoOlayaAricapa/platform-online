import { useContext } from "react";
import { SectionCourseContext } from "../../section-course";

export const useClassSection = () => {
  
    //* Attributes.
    const { classNameContent, typeOfUse, onHandleDeleteClass } = useContext( SectionCourseContext );

    //* Methods.

    return {
        //* Attributes.
        typeOfUse,
        classNameContent,

        //* Methods.
        onHandleDeleteClass,
    }

}
