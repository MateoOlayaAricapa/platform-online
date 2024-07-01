import { CardCourse } from '../../components/card-course/card-course';
import { LayoutPagesMenu } from '../../layout/layout-pages-menu';
import './_home.scss';

export const HomePage = () => {

    return (
        <LayoutPagesMenu>

            <div className='homePage width-container'>

                <h1>Todos los cursos</h1>

                <div className='homePage__curses'>
                    <CardCourse type='complete'/>
                </div>

            </div>

        </LayoutPagesMenu>
    );

}

export default HomePage;