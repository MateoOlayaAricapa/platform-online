import { createContext } from 'react';
import { Section } from './components/section/section';
import { Textfield } from '../../../../components';
import { useSectionCourse } from './useSectionCourse';
import { SectionCourseContextProps, SectionsCourse } from './interface/interface';

import './_section-course.scss';
import { iconCorrect, iconIncorrect } from '../../../assets';

export const SectionCourseContext = createContext( {} as SectionCourseContextProps );
const { Provider } = SectionCourseContext;

interface SectionCourseProps {
    typeOfUse        : 'create' | 'show';
    className?       : string;
    classNameSection?: string;
    classNameContent?: string;
    initialSections? : SectionsCourse[];
    onChange?        : ( args: SectionsCourse[] ) => void;
}

export const SectionCourse = ( { typeOfUse, initialSections, className, classNameContent, classNameSection, onChange }: SectionCourseProps ) => {

    const { 
        onHandleAddNewSection,
        onHandleDeleteSection,
        onHandleAddNewClass,
        onHandleDeleteClass,
        onHandleSaveChange,
        onInputChange, 
        sections, 
        stateForm,
        stateSave 
    } = useSectionCourse({ initialSections, onChange });

    return (
        <Provider 
            value={{ 
                onHandleDeleteSection, 
                onHandleAddNewClass, 
                onHandleDeleteClass, 
                typeOfUse,
                classNameContent,
                classNameSection 
            }}
        >

            <div className={`sectionCourse ${ className ? className : '' }`}>

                { /* Div que contiene el input y el botón para crear un sección */ }
                {
                    ( typeOfUse === 'create' ) && (
                        <>
                            <div className='sectionCourse__createSection'>

                                <Textfield
                                    type='text'
                                    placeHolder='Ingresa el título de la sección'
                                    className='custom-textfield'
                                    value={ stateForm.section }
                                    name='section'
                                    onChange={ onInputChange }
                                />

                                <button type='button' onClick={ onHandleAddNewSection }>
                                    Agregar sección
                                </button>

                            </div>

                            <div className='divisor'/>

                        </>
                    )
                }

                { /* Div que contiene las secciones con sus clases */ }
                <div className='sectionCourse__containerSections'>

                    { sections.map( (section) => <Section key={ section.id } dataSection={ section }/> ) }

                </div>

                { /* Div que tiene el botón para guardar todos los cambios */ }
                {
                    ( typeOfUse === 'create' ) && (

                        <>
                            <div className='sectionCourse__containerSave'>

                                <button type='button' onClick={ onHandleSaveChange }>
                                    Guardar cambios
                                </button>

                                <div
                                    className='sectionCourse__containerSave__message'
                                    style={{ display: stateSave === 'unsaved' ? 'none' : 'inherit' }}
                                >

                                    <img src={ stateSave === 'saved' ? iconCorrect : iconIncorrect } alt="" />
                                    <h4 style={{ color: stateSave === 'saved' ? '#006E4F' : '#E85047' }}>
                                        { 
                                            stateSave === 'saved' 
                                                ? 'Cambios guardados' 
                                                : 'No hay secciones o clases creadas' 
                                        }
                                    </h4>

                                </div>

                            </div>

                            <div className='divisor'/>
                        </>

                    )
                }

            </div>

        </Provider>
    );

}
