import { useForm } from "../../../../hooks/useForm";
import { SectionsCourse } from "../../components/section-course/interface/interface";

interface Curse {
    title       : string;
    videoUrl    : string;
    imageUrl    : string;
    description : string;
    topic       : string;
    language    : string;
    learnings   : string[];
    requirements: string[];
    sections    : SectionsCourse[];  
}

export const useInstructor = () => {

    //* Attributes.
    const { onInputChange, onInputChangeSelect, onChangeForm, stateForm } = useForm<Curse>({
        title: '',
        videoUrl: '',
        imageUrl: '',
        description: '',
        topic: '',
        language: '',
        learnings: [],
        requirements: [],
        sections: []
    });

    //* Methods.
    const onHandleCreateCurse = (): void => {
       console.log( stateForm );
    }

    const onChangeSections = ( value: SectionsCourse[] | { [key: string]: any } ): void => {

        if ( Array.isArray( value ) ) {

            onChangeForm({ 
                name: 'sections', 
                value: value 
            });

        } else {

            const isSectionLearning = Object.keys( value )[0].includes('learningPoint');

            onChangeForm({
                name: isSectionLearning ? 'learnings' : 'requirements',
                value: Object.keys( value ).map( key => value[key] )
            });

        }

    }

    return {
        //* Attributes.
        stateForm,

        //* Methods.
        onInputChange,
        onInputChangeSelect,
        onHandleCreateCurse,
        onChangeSections
    }

}
