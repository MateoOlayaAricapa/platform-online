import { iconCalendar, iconClass, iconLanguage, iconSections, iconTime } from '../../../../../assets';
import './_section-data.scss';

import { Uuid } from '../../../../../../config/uuid.adapter';

interface Data {
    title         : string;
    createdAt     : string;
    language      : string;
    totalTime     : string;
    totalSections : number;
    totalClasses  : number;
    topics        : string[];
}

interface SectionDataProps {
    data     : Data;
    className: string;
}

export const SectionData = ( { data, className }: SectionDataProps ) => {

    const { totalClasses, createdAt, language, totalSections, title, topics, totalTime } = data;

    return (
        <div className={`sectionData ${ className ? className : '' }`}>

            <h1>{ title }</h1>

            <div className='sectionData__item'>
                <img src={ iconCalendar } alt="" />
                <p>{ createdAt }</p>
            </div>

            <div className='sectionData__item'>
                <img src={ iconLanguage } alt="" />
                <p>{ language }</p>
            </div>

            <h1> El curso incluye: </h1>

            <div className='sectionData__item'>
                <img src={ iconTime } alt="" />
                <p>{ `${ totalTime } minutos en total` }</p>
            </div>

            <div className='sectionData__item'>
                <img src={ iconSections } alt="" />
                <p>
                    { 
                        ( totalSections > 1 ) 
                            ? `${ totalSections } secciones` 
                            : `${ totalSections } sección` 
                    }
                </p>
            </div> 

            <div className='sectionData__item'>
                <img src={ iconClass } alt="" />
                <p>
                    { 
                        ( totalClasses > 1 )
                            ? `${ totalClasses } clases` 
                            : `${ totalClasses } clase` 
                    }
                </p>
            </div>

            <h1> Temas que incluye: </h1>

            <div className='sectionData__topics'>

                {
                    topics.map(topic => (
                        <div className='sectionData__topics__container' key={ Uuid.v4() }>
                            <h2>{ topic }</h2>
                        </div>
                    ))
                }
                
            </div>

        </div>
    );

}
