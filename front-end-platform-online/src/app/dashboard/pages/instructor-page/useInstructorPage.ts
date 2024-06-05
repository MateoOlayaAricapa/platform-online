import { useForm } from "../../../../hooks/useForm";

interface Curse {
    title       : string;
    videoUrl    : string;
    imageUrl    : string;
    description : string;
    topic       : string;
    language    : string;
    learnings   : string[];
    requirements: string[];
}

export const useInstructor = () => {

    //* Attributes.
    const { onInputChange, onInputChangeSelect, stateForm } = useForm<Curse>({
        title: '',
        videoUrl: '',
        imageUrl: '',
        description: '',
        topic: '',
        language: '',
        learnings: [],
        requirements: [],
    });

    const onHandleCreateCurse = (): void => {
       
    }

    return {
        //* Attributes.
        stateForm,

        //* Methods.
        onInputChange,
        onInputChangeSelect,
        onHandleCreateCurse,
    }

}
