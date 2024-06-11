import { Classes } from '../../interface/interface';
import { useClassSection } from './useClassSection';

import './_class-section.scss';
import { iconTrash, iconVideo } from '../../../../../assets';

interface ClassSectionProps {
    dataClass: Classes;
    idSection: string;
}

export const ClassSection = ( { dataClass, idSection }: ClassSectionProps ) => {

    const { title, typeContent, id } = dataClass;

    const { classNameContent, typeOfUse, onHandleDeleteClass } = useClassSection();

    return (
        <div className={ `classCourse ${ classNameContent ? classNameContent : '' }` }>

            <div className='classCourse__imagenTitle'>

                <div className='classCourse__imagenTitle__imagen'>
                    <img src={ typeContent === 'video' ? iconVideo : '' } alt="" />
                </div>

                <h2>{ title }</h2>

            </div>

            {
                ( typeOfUse === 'create' ) && (
                    <button type='button' onClick={ () => onHandleDeleteClass( idSection, id ) }>
                        <img src={ iconTrash } alt="" />
                    </button>
                )
            }

        </div>
    );

}
