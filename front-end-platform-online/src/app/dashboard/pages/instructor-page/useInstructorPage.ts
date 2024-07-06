import { useForm } from "../../../../hooks/useForm";
import { SectionsCourse } from "../../components/section-course/interface/interface";
import { ValidatedValueTexfield } from "../../../../helpers/validated-textfield";
import { useModal } from "../../../../hooks/useModal";

export interface Curse {
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

    const { dataModal, onClosedModal, onTypeShowModal } = useModal();

    //* Methods.
    const onHandleCreateCurse = (): void => {
       
        const { status, errorMessage } = ValidatedValueTexfield.isValidated( stateForm );

        if ( !status ) {
        
            onTypeShowModal({ 
                type: 'problem',
                isOpen: true,
                title: 'Datos vacíos',
                message: errorMessage!  
            });

            return;
        
        }

        onTypeShowModal({ 
            type: 'success',
            isOpen: true,
            title: 'Guardado!',
            message: "Los datos fueron guardados"
        });

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
        dataModal,

        //* Methods.
        onInputChange,
        onInputChangeSelect,
        onHandleCreateCurse,
        onChangeSections,
        onClosedModal
    }

}
