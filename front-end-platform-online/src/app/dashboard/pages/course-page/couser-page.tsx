import './_course-page.scss';

import { useCoursePage } from './useCoursePage';

//* Components
import { SectionContent, SectionData, SectionDescription, SectionExtra, SectionInstructor } from './components';
import { LayoutPagesMenu } from '../../layout/layout-pages-menu';

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
        <LayoutPagesMenu>

            <div className='coursePage width-container'>

                <div className='coursePage__firstSection'>

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

                <div className='coursePage__secondSection'>

                    <SectionData
                        data={ dataInformationCourse }
                    />

                    <SectionInstructor
                        data={ dataInstructor }
                    />

                </div>

            </div>

        </LayoutPagesMenu>
    );

}

export default CoursePage;
