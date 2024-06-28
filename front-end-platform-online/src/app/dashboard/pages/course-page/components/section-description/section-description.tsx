import { iconArrow, iconVideoInstructor } from '../../../../../assets';
import './_section-description.scss';

interface Data {
    urlVideo    : string;
    description : string;
    photo       : string;
    name        : string;
}

interface SectionDescriptionProps {
    data: Data;
}

export const SectionDescription = ( { data }: SectionDescriptionProps ) => {

    const { description, name, photo, urlVideo } = data;

    return (
        <div className='sectionDescription'>

            <div className='sectionDescription__buttonBack'>
                <button>
                    <img src={ iconArrow } alt="" />
                    Regresar
                </button>
            </div>

            <div className='sectionDescription__video'>
                {
                    ( urlVideo )
                        ? <iframe src={ urlVideo } />
                        : <img src={ iconVideoInstructor } alt="" />
                }
            </div>

            <div className='sectionDescription__instructor'>

                <div className='sectionDescription__instructor__photo'>
                    <img src={ photo } alt="" />
                </div>

                <div className='sectionDescription__instructor__titles'>
                    <h2>{ name }</h2>
                    <h2>Instructor</h2>
                </div>

            </div>

            <div className='sectionDescription__descriptionCourse'>

                <h1> Descripción </h1>
                <p>{ description }</p>

            </div>

        </div>
    );

}
