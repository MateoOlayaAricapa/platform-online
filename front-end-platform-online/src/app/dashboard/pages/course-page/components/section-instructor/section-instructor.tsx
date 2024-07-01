import './_section-instructor.scss';

interface Data {
    name        : string;
    career      : string;
    description : string;
}

interface SectionInstructorProps {
    data: Data;
    className?: string;
}

export const SectionInstructor = ( { className, data }: SectionInstructorProps ) => {

    const { career, description, name } = data;

    return (
        <div className={`sectionInstructor ${ className ? className : '' }`}>

            <h1>Sobre el instructor</h1>

            <div className='sectionInstructor__perfil'>

                <div className='sectionInstructor__perfil__photo'>
                    <img src="" alt="" />
                </div>

                <div className='sectionInstructor__perfil__titles'>
                    <h2>{ name }</h2>
                    <h2>{ career }</h2>
                </div>

            </div>

            <div className='sectionInstructor__description'>

                <p> { description } </p>

            </div>

        </div>
    );

}
