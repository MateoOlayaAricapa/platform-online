import { iconCorrect, iconIncorrect } from "../../../assets";

interface UseModalMessageParams {
    type    : 'success' | 'problem' | 'alert' | 'message';
}

export const useModalMessage = ( { type }: UseModalMessageParams ) => {

    //* Attributes.


    //* Methods.
    const selectIconByType = (): string => {

        switch ( type ) {
            case 'success':
                return iconCorrect;
            
            case 'problem':
                return iconIncorrect;
        
            default:
                return iconCorrect;
        }

    }

    const selectColorByType = (): string => {

        switch ( type ) {
            case 'success':
                return '#006E4F';

            case 'problem':
                return '#E85047';
        
            default:
                return '#006E4F';
        }

    }

    return {
        //* Attributes.

        //* Methods.
        selectIconByType,
        selectColorByType
    }

}
