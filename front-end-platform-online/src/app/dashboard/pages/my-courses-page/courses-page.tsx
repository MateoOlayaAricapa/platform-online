import { CardCourse } from '../../components/card-course/card-course';
import { LayoutPagesMenu } from '../../layout/layout-pages-menu';
import './_courses-page.scss';

export const CoursesPage = () => {

    return (
        <LayoutPagesMenu>

            <div className='coursesPage width-container'>
                
                <h1>Tus cursos</h1>

                <div className='coursesPage__sectionCourses'>

                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>
                    <CardCourse type='progress'/>

                </div>

            </div>

        </LayoutPagesMenu>
    );

}

export default CoursesPage;