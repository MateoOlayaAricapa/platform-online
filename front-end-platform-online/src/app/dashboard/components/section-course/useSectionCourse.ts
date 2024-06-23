import { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { Classes, SectionsCourse } from "./interface/interface";
import { Uuid } from "../../../../config/uuid.adapter";

interface UseSectionCourseParams {
    initialSections?: SectionsCourse[];
    onChange?       : ( args: SectionsCourse[] ) => void;
}

type StateSave = 'unsaved' | 'saved' | 'problem';

export const useSectionCourse = ( { initialSections, onChange }: UseSectionCourseParams ) => {
  
    //* Attributes.
    const { onInputChange, stateForm } = useForm<{ section: string }>({
        section: ''
    });

    const [ sections, setSections ] = useState<SectionsCourse[]>( initialSections || [] );

    const [ stateSave, setStateSave ] = useState<StateSave>('unsaved');

    //* Methods.
    const onHandleAddNewSection = (): void => {

        if ( !stateForm.section ) return;

        const newSection: SectionsCourse = {
            id: Uuid.v4(),
            title: stateForm.section 
        };

        setSections([ ...sections, { ...newSection } ]);

    }

    const onHandleDeleteSection = ( idSection: string ): void => {

        const newSections = sections.filter( ({ id }) => id !== idSection );

        setSections( newSections );

    }

    const onHandleAddNewClass = ( id: string, newClass: Classes ): void => {

        const newSections: SectionsCourse[] = sections.map(section => {

            if ( section.id === id ) {

                return {
                    ...section,
                    classes: [ ...(section.classes || []), { ...newClass } ]
                }

            }

            return section;

        });

        setSections( newSections );

    }

    const onHandleDeleteClass = ( idSection: string, idClass: string ): void => {

        const newSections: SectionsCourse[] = sections.map(section => {

            if ( section.id === idSection ) {

                const newClasses = section.classes?.filter( ({ id }) => id !== idClass );

                return { ...section, classes: newClasses };

            }

            return section;

        });

        setSections( newSections );

    }

    const onHandleSaveChange = (): void => {

        if ( sections.length === 0 ) { 
            setStateSave( 'problem' ); 
            return;
        }

        setStateSave( 'saved' );
        onChange && onChange( sections );

    }

    return {
        //* Attributes.
        sections,
        stateForm,
        stateSave,

        //* Methods.
        onInputChange,
        onHandleAddNewSection,
        onHandleDeleteSection,
        onHandleAddNewClass,
        onHandleDeleteClass,
        onHandleSaveChange       
    }

}
