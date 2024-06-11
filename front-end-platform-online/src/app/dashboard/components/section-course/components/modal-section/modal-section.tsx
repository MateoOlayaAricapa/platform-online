import { Select, Textfield } from '../../../../../../components';
import { Option } from '../../../../../../components/select/option';
import { useModalSection } from './useModalSection';
import { ErrorModal } from '../error/error-modal';

import './_modal-section.scss';
import { iconVideo } from '../../../../../assets';

interface ModalSectionProps {
    idSection       : string;
    onOpenCloseModal: () => void;
}

export const ModalSection = ( { onOpenCloseModal, idSection }: ModalSectionProps ) => {

    const { 
        onInputChange, 
        onInputChangeSelect,
        onHandleCreateClass,
        onHandleCloseErrorModal, 
        stateForm,
        errorForm 
    } = useModalSection({ onOpenCloseModal });

    return (
        <div className='containerModal'>
            
            <div className='containerModal__modal'>

                <h3>Creando clase</h3>

                <div className='divisor'/>

                { errorForm && <ErrorModal message={ errorForm } onClosedError={ onHandleCloseErrorModal }/> }

                <div className='containerModal__modal__titleTypeContent'>

                    <Textfield
                        type='text'
                        title='Título'
                        placeHolder='Ingresa el título de la clase'
                        className='textfield-custom-modal'
                        value={ stateForm.title }
                        name='title'
                        onChange={ onInputChange }
                    />

                    <Select
                        title='Tipo de contenido'
                        initialValue='Selecciona'
                        name='typeContent'
                        onChange={ onInputChangeSelect }
                    >
                        <Option value='video'/>
                        <Option value='archivo'/>
                    </Select>

                </div>

                <Textfield
                    type='text'
                    title='Video'
                    placeHolder='Ingresa la URL'
                    className='textfield-custom-modal'
                    value={ stateForm.urlContent }
                    name='urlContent'
                    onChange={ onInputChange }
                />

                <div className='containerModal__modal__video'>
                    { 
                        ( stateForm.urlContent )
                        ? <iframe src={ stateForm.urlContent }/>
                        : <img src={ iconVideo } alt="" />
                    }
                </div>

                <div className='divisor'/>

                <div className='containerModal__modal__buttons'>

                    <button type='button' onClick={ () => onHandleCreateClass( idSection ) }>
                        Guardar
                    </button>

                    <button type='button' onClick={ onOpenCloseModal }>
                        Cancelar
                    </button>

                </div>

            </div>

        </div>
    );

}
