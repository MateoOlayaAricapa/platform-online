import './_section-inputs-data.scss';

import { ChangeEvent } from 'react';
import { Select, Textfield } from '../../../../../../components';
import { Option } from '../../../../../../components/select/option';
import { ValidationIframe } from '../../../../../../helpers/validation-iframe';
import { iconImageInstructor, iconVideoInstructor } from '../../../../../assets';
import { Curse } from '../../useInstructorPage';

type InputChange        = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type InputChangeSelect  = { value: string; name: string };

interface SectionInputData {
    stateForm           : Curse;
    onInputChange       : ( { target }: InputChange ) => void;
    onInputChangeSelect : ( { name, value }: InputChangeSelect ) => void;
}

export const SectionInputsData = ( { stateForm, onInputChange, onInputChangeSelect }: SectionInputData ) => {

    return (
        <div className='sectionInputsData'>
            
            <Textfield 
                type='text' 
                title='Título' 
                placeHolder='Ingresa el título del curso'
                className='custom-textfield'
                name='title'
                value={ stateForm.title }
                onChange={ onInputChange }
            />

            <div className='sectionInputsData__videoImage'>

                <Textfield 
                    type='text' 
                    title='Video introducción' 
                    placeHolder='Ingresa la URL'
                    className='custom-textfield'
                    name='videoUrl'
                    value={ stateForm.videoUrl }
                    onChange={ onInputChange }
                />

                <div className='sectionInputsData__videoImage__content'>
                    {
                        ( stateForm.videoUrl.length !== 0 && ValidationIframe.isValidUrl( stateForm.videoUrl ) )
                            ? <iframe src={ stateForm.videoUrl }/>
                            : <img src={ iconVideoInstructor } alt="" />
                    }
                </div>

            </div>

            <div className='sectionInputsData__videoImage'>

                <Textfield 
                    type='text' 
                    title='Imagen de presentación' 
                    placeHolder='Ingresa la URL'
                    className='custom-textfield'
                    name='imageUrl'
                    value={ stateForm.imageUrl }
                    onChange={ onInputChange }
                />

                <div className='sectionInputsData__videoImage__content'>
                    <img 
                        src={ stateForm.imageUrl ? stateForm.imageUrl : iconImageInstructor } 
                        alt="" 
                    />
                </div>

            </div>

            <Textfield
                type='textArea'
                title='Descripción'
                placeHolder='Ingresa una descripción para el curso'
                className='custom-textfield-area'
                name='description'
                value={ stateForm.description }
                onChange={ onInputChange }
            />

            <Select
                className='custom-select'
                title='Temas'
                initialValue='Selecciona un tema'
                name='topic'
                onChange={ onInputChangeSelect }
            >
                <Option value='Option 1'/>
                <Option value='Option 2'/>
                <Option value='Option 3'/>
                <Option value='Option 4'/>
                <Option value='Option 5'/>
            </Select>

            <Select
                className='custom-select'
                title='Idioma'
                initialValue='Selecciona un idioma'
                name='language'
                onChange={ onInputChangeSelect }
            >
                <Option value='Option 1'/>
                <Option value='Option 2'/>
                <Option value='Option 3'/>
                <Option value='Option 4'/>
                <Option value='Option 5'/>
            </Select>

        </div>
    );

}
