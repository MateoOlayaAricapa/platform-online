import { useNavigate } from "react-router-dom";

export const useCardCourse = ( type: 'complete' | 'small' | 'progress' ) => {
  
    //* Attributes.
    const isCompleteCard: boolean = ( type === 'complete' );
    const isSmallCard: boolean = ( type === 'small' );
    const isProgressCard: boolean = ( type === 'progress' );

    const navegate = useNavigate();

    //* Methods.
    const onHandleOpenCourse = (): void => {
        navegate('/dashboard/course/desarrollo de software/1', {
            replace: false
        });
    }

    return {
        //* Attributes.
        isCompleteCard,
        isProgressCard,
        isSmallCard,

        //* Methods.
        onHandleOpenCourse,
    }

}
