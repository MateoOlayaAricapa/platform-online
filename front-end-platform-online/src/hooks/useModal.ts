import { useState } from 'react';

interface DataModal {
    isOpen  : boolean,
    type    : 'success' | 'problem' | 'alert' | 'message';
    title   : string;
    message : string;
}

export const useModal = () => {
  
    //* Attributes.
    const [ dataModal, setDataModal ] = useState<DataModal>({
        isOpen: false,
        message: '',
        title: '',
        type: 'success'
    });

    //* Methods.
    const onClosedModal = (): void => {
        setDataModal({ ...dataModal, isOpen: false });
    }

    const onTypeShowModal = ( dataModal: DataModal ): void => {
        setDataModal({ ...dataModal });
    }

    return {
        //* Attributes.
        dataModal,

        //* Methods.
        onClosedModal,
        onTypeShowModal
    }

}
