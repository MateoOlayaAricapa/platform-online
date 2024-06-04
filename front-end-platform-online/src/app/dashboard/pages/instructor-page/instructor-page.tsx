import { Textfield } from '../../../../components/textfield/textfield';
import './_instructor-page.scss';

import { iconVideo, iconImage } from '../../../assets';

export const InstructorPage = () => {

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
                        />

                        { /* Div que tiene el fiel y el contenido del video e imagen del curso */ }
                        <div className='instructorPage__container__createCourse__data__videoImage'>

                            <Textfield 
                                type='text' 
                                title='Video introducción' 
                                placeHolder='Ingresa la URL'
                                className='custom-textfield'
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
                        />
                    
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
