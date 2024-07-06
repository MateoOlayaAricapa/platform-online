import './_section-published-courses.scss'
import { CardCourse } from '../../../../components';

interface SectionPublishedCoursesProps {

}

export const SectionPublishedCourses = ( {}: SectionPublishedCoursesProps ) => {

    return (
        <div className='sectionPublishedCourses'>

            <h1>Tus cursos publicados</h1>
            <div className='sectionPublishedCourses__courses'>

                <CardCourse type='small'/>

            </div>

        </div>
    );

}
