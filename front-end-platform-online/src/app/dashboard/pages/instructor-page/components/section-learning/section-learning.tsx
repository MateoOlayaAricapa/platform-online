import { Textfield } from '../../../../../../components';
import { useSectionLearning } from './useSectionLearning';

import { iconAdd, iconTrash } from '../../../../../assets';
import './_section-learning.scss';

export type OnChangeLearning = { [key: string]: any };

interface SectionLearningProps {
    onChange?: ( args: OnChangeLearning ) => void;
}

export const SectionLearning = ( { onChange }: SectionLearningProps ) => {

    const { 
        onHandleCreateLearnings, 
        onHandleDeleteLearnings, 
        onInputChange, 
        stateForm,
        textfields 
    } = useSectionLearning({ onChange });

    return (
        <div className='sectionLearning'>

            <h2>¿Qué se aprenderá?</h2>

            <Textfield
                type='text'
                className='custom-textfield'
                name='learningPoint1'
                value={ stateForm.learningPoint1 }
                onChange={ onInputChange }
            />

            {
                textfields.map(({ name, id }) => (
                    <div className='sectionLearning__textfield'>

                        <Textfield
                            key={ id }
                            type='text'
                            className='custom-textfield'
                            name={ name }
                            value={ stateForm[ name ] }
                            onChange={ onInputChange }
                        />

                        <button type='button' onClick={ () => onHandleDeleteLearnings( name, id ) }>
                            <img src={ iconTrash } alt="Icon trash" />
                        </button>

                    </div>
                ))
            }

            <div className='sectionLearning__buttonAdd'>

                <button type='button' onClick={ onHandleCreateLearnings }>
                    <img src={ iconAdd } alt="" />
                </button>

                <h3>Añadir otro campo</h3>

            </div>

        </div>
    );

}
