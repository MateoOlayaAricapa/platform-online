import './_section-content.scss';

import { SectionsCourse } from '../../../../components/section-course/interface/interface';
import { SectionCourse } from '../../../../components/section-course/section-course';

interface SectionContent {
    initialData : SectionsCourse[];
    className?  : string;
}

export const SectionContent = ( { initialData, className }: SectionContent ) => {

    return (
        <div className={`sectionContent ${ className ? className : '' }`}>

            <h1>Contenido del curso</h1>

            <SectionCourse
                typeOfUse='show'
                initialSections={ initialData }
            />

        </div>
    );

}
