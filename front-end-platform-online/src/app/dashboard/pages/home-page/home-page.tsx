import { CardCourse } from '../../components/card-course/card-course';
import './_home.scss';

export const HomePage = () => {

    return (
        <div className="homePage">

            <div className='homePage__container'>

                <h1>Todos los cursos</h1>

                <div className='homePage__container__curses'>
                    <CardCourse type='complete'/>
                </div>

            </div>

        </div>
    );

}

export default HomePage;