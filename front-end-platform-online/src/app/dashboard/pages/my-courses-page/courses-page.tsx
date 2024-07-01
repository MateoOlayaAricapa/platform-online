import { CardCourse } from '../../components/card-course/card-course';
import './_courses-page.scss';

export const CoursesPage = () => {

    return (
        <div className='coursesPage'>

            <div className='coursesPage__container'>
                
                <h1>Tus cursos</h1>

                <div className='coursesPage__container__sectionCourses'>

                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>

                </div>

            </div>

        </div>
    );

}

export default CoursesPage;