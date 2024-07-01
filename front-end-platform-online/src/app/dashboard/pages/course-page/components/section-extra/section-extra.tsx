import './_section-extra.scss';

interface SectionExtraProps {
    title       : string;
    extraData   : string[];
    className?  : string;
}

export const SectionExtra = ( { title, extraData, className }: SectionExtraProps ) => {

    return (
        <div className={`sectionExtra ${ className ? className : '' }`}>

            <h1>{ title }</h1>

            <div className='sectionExtra__content'>

                { extraData.map( (item, i) => <li key={i}>{ item }</li> ) }

            </div>
        
        </div>
    );

}
