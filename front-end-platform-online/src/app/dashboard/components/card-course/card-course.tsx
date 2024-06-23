import { useCardCourse } from './useCardCourse';

import { iconTime, iconClass, iconSections } from '../../../assets';
import './_card-course.scss';

interface CardCourseProps {
    type: 'complete' | 'small' | 'progress';
}

export const CardCourse = ( { type }: CardCourseProps ) => {

    const { 
        isCompleteCard, 
        isProgressCard, 
        isSmallCard, 
    } = useCardCourse( type );

    return (
        <div className={ isCompleteCard ? 'cardCourse' : 'cardCourseType' }>

            <div className={ isCompleteCard ? 'cardCourse__image' : 'cardCourseType__image' }>
                <img src="" alt="" />
            </div>

            <div className={ isCompleteCard ? 'cardCourse__information' : 'cardCourseType__information' }>

                <h2>NestJs + Microservicios: Aplicaciones escalables y modulares</h2>

                { isCompleteCard && <CardDescription/> }

                <h2>Mateo Olaya A.</h2>

                { !isSmallCard && <div className='divisor'/> }
                { isCompleteCard && <CardDetails/> }
                { isProgressCard && <CardProgress progress={ 80 }/> }

            </div>

        </div>
    );

}


//* Subcomponents

const CardDetails = () => (
    <div className='cardCourse__information__details'>

        <div>
            <img src={ iconTime } alt="" />
            <h2>10 horas en total</h2>
        </div>

        <div>
            <img src={ iconSections } alt="" />
            <h2>150 secciones</h2>
        </div>

        <div>
            <img src={ iconClass } alt="" />
            <h2>450 clases</h2>
        </div>

    </div>
);

const CardProgress = ( { progress }: { progress: number } ) => (
    <div className='cardCourseType__information__progress'>

        <h4>{`${ progress }% completado`}</h4>
        <div className='cardCourseType__information__progress__container'>
            <div style={{ width: `${ progress }%` }} className='cardCourseType__information__progress__container__bar'/>
        </div>

    </div>
);

const CardDescription = () => (
    <h2>
        Imágenes, modelos, audio a texto, texto a audio, asistentes, 
        transcripciones, traducciones, librería de OpenAI y más.
    </h2>
);