import './_course-page.scss';

import { useCoursePage } from './useCoursePage';

//* Components
import { SectionContent, SectionData, SectionDescription, SectionExtra, SectionInstructor } from './components';

export const CoursePage = () => {

    const { 
        dataDescription, 
        dataLearnings, 
        dataRequirements, 
        dataInformationCourse,
        dataInstructor,
        dataContent
    } = useCoursePage();

    return (
        <div className='coursePage'>

            <div className='coursePage__container'>

                <div className='coursePage__container__firstSection'>

                    <SectionDescription
                        data={ dataDescription }
                    />

                    <SectionContent
                        initialData={ dataContent }
                    />

                    <SectionExtra
                        title='Requisitos'
                        extraData={ dataRequirements }
                    />

                    <SectionExtra
                        title='Lo que aprenderás'
                        extraData={ dataLearnings }
                    />

                </div>

                <div className='coursePage__container__secondSection'>

                    <SectionData
                        data={ dataInformationCourse }
                    />

                    <SectionInstructor
                        data={ dataInstructor }
                    />

                </div>

            </div>

        </div>
    );

}

export default CoursePage;
