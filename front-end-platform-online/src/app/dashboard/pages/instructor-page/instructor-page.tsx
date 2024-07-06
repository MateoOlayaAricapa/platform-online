import './_instructor-page.scss';

import { useInstructor } from './useInstructorPage';
import { ModalMessage, SectionCourse } from '../../components';
import { LayoutPagesMenu } from '../../layout/layout-pages-menu';
import { 
    SectionInputsData, 
    SectionLearning, 
    SectionPublishedCourses, 
    SectionRequirements, 
    SectionSettings 
} from './components';

export const InstructorPage = () => {

    const { 
        stateForm,
        dataModal,
        onInputChange,
        onInputChangeSelect, 
        onHandleCreateCurse,
        onChangeSections,
        onClosedModal
    } = useInstructor();

    return (
        <LayoutPagesMenu>

            <div className='instructorPage width-container'>
                
                <div className='instructorPage__firstSection'>

                    <div className='instructorPage__firstSection__intro'>

                        <h2>Instructor</h2>
                        <p>
                            Puedes crear tus propios cursos para publicarlos en la gran comunidad que tiene 
                            <span> MADEMY</span>. Además, puedes enseñar toda la variedad de temas profesionales.
                        </p>

                    </div>

                    <SectionInputsData
                        stateForm={ stateForm }
                        onInputChange={ onInputChange }
                        onInputChangeSelect={ onInputChangeSelect }
                    />

                    <SectionLearning onChange={ onChangeSections }/>

                    <SectionRequirements onChange={ onChangeSections }/>

                    <SectionCourse typeOfUse='create' onChange={ onChangeSections }/>

                    <SectionSettings onCreateCurse={ onHandleCreateCurse }/>

                </div>

                <div className='instructorPage__secondSection'>

                    <SectionPublishedCourses/>

                </div>

                { /* Componente que tiene la modal que muestra un mensaje */ }
                {
                    ( dataModal.isOpen ) && (
                        <ModalMessage 
                            type={ dataModal.type }
                            title={ dataModal.title }
                            message={ dataModal.message }
                            onClosed={ onClosedModal }
                        />
                    )
                }

            </div>

        </LayoutPagesMenu>
    );

}

export default InstructorPage;