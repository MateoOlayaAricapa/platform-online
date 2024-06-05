import './_instructor-page.scss';

import { Textfield, Select } from '../../../../components';

import { iconVideo, iconImage } from '../../../assets';
import { Option } from '../../../../components/select/option';
import { useInstructor } from './useInstructorPage';
import { SectionLearning } from './components/section-learning/section-learning';
import { SectionRequirements } from './components/section-requirements/section-requirements';

export const InstructorPage = () => {

    const { 
        stateForm,
        onInputChange,
        onInputChangeSelect, 
    } = useInstructor();

    return (
        <div className='instructorPage'>

            { /* Div que contiene todo el contenido HTML */ }
            <div className='instructorPage__container'>
                
                { /* Div que contiene todos los campos para crear un curso */ }
                <div className='instructorPage__container__createCourse'>

                    { /* Div que contiene el título y introducción del instructor */ }
                    <div className='instructorPage__container__createCourse__titles'>

                        <h2>Instructor</h2>
                        <p>
                            Puedes crear tus propios cursos para publicarlos en la gran comunidad que tiene 
                            <span> MADEMY</span>. Además, puedes enseñar toda la variedad de temas profesionales.
                        </p>

                    </div>

                    { /* Div que todos los inputs para crear el curso */ }
                    <div className='instructorPage__container__createCourse__data'>
                    
                        <Textfield 
                            type='text' 
                            title='Título' 
                            placeHolder='Ingresa el título del curso'
                            className='custom-textfield'
                            name='title'
                            value={ stateForm.title }
                            onChange={ onInputChange }
                        />

                        { /* Div que tiene el fiel y el contenido del video e imagen del curso */ }
                        <div className='instructorPage__container__createCourse__data__videoImage'>

                            <Textfield 
                                type='text' 
                                title='Video introducción' 
                                placeHolder='Ingresa la URL'
                                className='custom-textfield'
                                name='videoUrl'
                                value={ stateForm.videoUrl }
                                onChange={ onInputChange }
                            />

                            <div className='instructorPage__container__createCourse__data__videoImage__content'>
                                <img src={ iconVideo } alt="" />
                            </div>

                        </div>

                        { /* Div que tiene el fiel y el contenido del video e imagen del curso */ }
                        <div className='instructorPage__container__createCourse__data__videoImage'>

                            <Textfield 
                                type='text' 
                                title='Imagen de presentación' 
                                placeHolder='Ingresa la URL'
                                className='custom-textfield'
                                name='imageUrl'
                                value={ stateForm.imageUrl }
                                onChange={ onInputChange }
                            />

                            <div className='instructorPage__container__createCourse__data__videoImage__content'>
                                <img src={ iconImage } alt="" />
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

                        { /* Componente sección puntos de aprendizaje */ }
                        <SectionLearning/>

                        { /* Componente sección requisitos estudios */ }
                        <SectionRequirements/>
                    
                    </div>

                </div>

                { /* Div que la tabla donde se muestra los cursos publicados por el instructor */ }
                <div className='instructorPage__container__publishCourses'>
                    hola
                </div>

            </div>

        </div>
    );

}
