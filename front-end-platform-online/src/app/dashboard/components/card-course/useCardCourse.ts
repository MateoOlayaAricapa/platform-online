export const useCardCourse = ( type: 'complete' | 'small' | 'progress' ) => {
  
    //* Attributes.
    const isCompleteCard: boolean = ( type === 'complete' );
    const isSmallCard: boolean = ( type === 'small' );
    const isProgressCard: boolean = ( type === 'progress' );

    //* Methods.

    return {
        //* Attributes.
        isCompleteCard,
        isProgressCard,
        isSmallCard,

        //* Methods.
    }

}
