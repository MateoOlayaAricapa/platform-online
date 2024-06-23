import { ClassSection } from '../class-section/class-section';

import { useSection } from './useSection';
import { SectionsCourse } from '../../interface/interface';
import { ModalSection } from '../modal-section/modal-section';

import { iconAdd, iconArrowSelect, iconTrash } from '../../../../../assets';
import './_section.scss'

interface SectionProps {
    dataSection: SectionsCourse;
}

export const Section = ( { dataSection }: SectionProps ) => {

    const { classes = [], title, id } = dataSection;
    
    const {
        typeOfUse,
        classNameSection, 
        canShowClasses,
        canOpenModal, 
        onHandleShowClasses,
        onHandleOpenClosedModal,
        onHandleDeleteSection 
    } = useSection();

    return (
        <div className={`sectionContainer ${ classNameSection ? classNameSection : '' }`}>

            { /* Div que tiene la sección */ }
            <div className='sectionContainer__section'>

                <div className='sectionContainer__section__title' onClick={ onHandleShowClasses }>
                    
                    <img 
                        src={ iconArrowSelect } 
                        alt="Icono arrow"
                        className='iconRotate' 
                        style={{ transform: canShowClasses ? 'rotate(0deg)' : 'rotate(-180deg)'}}
                    />
                    
                    <h1>{ title }</h1>

                </div>

                {
                    ( typeOfUse === 'create' ) && (
                        <div className='sectionContainer__section__buttons'>

                            <button type='button' onClick={ onHandleOpenClosedModal }>
                                <img src={ iconAdd } alt="" />
                            </button>

                            <button type='button' onClick={ () => onHandleDeleteSection( id ) }>
                                <img src={ iconTrash } alt="" />
                            </button>

                        </div>
                    )
                }

            </div>

            { /* Clases que tiene la sección - son una serie de Divs */ }
            {
                ( canShowClasses ) && classes.map(contentClass => (
                    <ClassSection
                        key={ contentClass.id } 
                        dataClass={ contentClass }
                        idSection={ id }
                    />
                ))
            }

            { /* Div que contiene la componente de la ventana modal para crear clase */ }
            { 
                canOpenModal && (
                    <ModalSection 
                        idSection={ id } 
                        onOpenCloseModal={ onHandleOpenClosedModal }
                    />
                ) 
            }

        </div>
    );

}
