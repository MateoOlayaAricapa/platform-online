export interface Classes {
    id          : string;
    typeContent : 'video' | 'file' | '';
    title       : string;
    urlContent  : string;
}

export interface SectionsCourse {
    id      : string;
    title   : string;
    classes?: Classes[];
}

export interface SectionCourseContextProps {
    typeOfUse               : 'create' | 'show';
    classNameSection?       : string;
    classNameContent?       : string;
    onHandleDeleteSection   : ( idSection: string ) => void;
    onHandleDeleteClass     : ( idSection: string, idClass: string ) => void;
    onHandleAddNewClass     : ( id: string, newClass: Classes ) => void;
}