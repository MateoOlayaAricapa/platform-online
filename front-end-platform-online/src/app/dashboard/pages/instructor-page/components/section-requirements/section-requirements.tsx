import { iconAdd, iconTrash } from '../../../../../assets';
import './_section-requirements.scss';

import { Textfield } from '../../../../../../components';
import { useSectionRequirements } from './useSectionRequirements';

export type OnChangeRequirements = { [key: string]: any };

interface SectionRequirementsProps {
    onChange?: ( args: OnChangeRequirements ) => void;
}

export const SectionRequirements = ( { onChange }: SectionRequirementsProps ) => {
    
    const { 
        onHandleCreateRequirements, 
        onHandleDeleteRequirements, 
        onInputChange, 
        stateForm, 
        textfields
    } = useSectionRequirements({ onChange });

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
                    <div className='sectionRequirements__textfield'>

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
