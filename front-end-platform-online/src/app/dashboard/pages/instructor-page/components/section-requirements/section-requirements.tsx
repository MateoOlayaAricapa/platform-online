import './_section-requirements.scss';

import { Textfield } from '../../../../../../components';
import { useSectionRequirements } from './useSectionRequirements';

import { iconAdd, iconTrash } from '../../../../../assets';

export const SectionRequirements = () => {
    
    const { 
        onHandleCreateRequirements, 
        onHandleDeleteRequirements, 
        onInputChange, 
        stateForm, 
        textfields
    } = useSectionRequirements();

    return (
        <div className='sectionRequirements'>

            <h2>¿Cuáles son los requisitos para estudiar el curso?</h2>

            <Textfield
                type='text'
                className='custom-textfield'
                name='requirementPoint1'
                value={ stateForm.requirementPoint1 }
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
                            value={ stateForm[name] }
                            onChange={ onInputChange }
                        />

                        <button type='button' onClick={ () => onHandleDeleteRequirements( name, id ) }>
                            <img src={ iconTrash } alt="Icon trash" />
                        </button>

                    </div>
                ))
            }

            <div className='sectionLearning__buttonAdd'>

                <button type='button' onClick={ onHandleCreateRequirements }>
                    <img src={ iconAdd } alt="" />
                </button>

                <h3>Añadir otro campo</h3>

            </div>

        </div>
    );

}
