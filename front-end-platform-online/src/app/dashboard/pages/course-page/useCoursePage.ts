import { SectionsCourse } from "../../components/section-course/interface/interface";

export const useCoursePage = () => {
 
    //* Attributes.
    const dataDescription = {
        urlVideo: '',
        description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex sit amet 
            nibh rhoncus dictum. Sed hendrerit faucibus nunc, id lobortis nisi placerat eget. 
            Nunc ornare, eros id molestie cursus, erat ligula aliquam est, condimentum fringilla 
            nulla libero et metus. Nam ullamcorper tempus sem, at pretium diam mattis id. 
            Suspendisse ut felis eros. Nullam elementum est at nibh aliquet, ac varius tellus 
            feugiat. Vestibulum interdum metus ut nisi venenatis tristique.
        `, 
        photo: '',       
        name: 'Mateo Olaya A.'       
    };

    const dataRequirements = [
        'Conocer y desarrollar microservicios',
        'Conocer y desarrollar microservicios',
        'Conocer y desarrollar microservicios',
        'Conocer y desarrollar microservicios'
    ];

    const dataLearnings = [
        'Conocer y desarrollar microservicios',
        'Conocer y desarrollar microservicios',
        'Conocer y desarrollar microservicios',
        'Conocer y desarrollar microservicios'
    ];

    const dataInformationCourse = {
        title: 'NestJs + Microservicios: Aplicaciones escalables y modulares',
        createdAt: '1/07/2024',
        language: 'Español',
        totalTime: '10',
        totalSections: 150,
        totalClasses: 450,
        topics: ['Front End', 'Software']
    };

    const dataInstructor = {
        name: 'Mateo Olaya A.',
        career: 'Ingeniería Multimedia',
        description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce ut ex sit amet nibh rhoncus dictum. Sed hendrerit faucibus nunc, id 
            lobortis nisi placerat eget. Nunc ornare, eros id molestie cursus, erat ligula 
            aliquam est, condimentum fringilla nulla libero et metus.
        `
    };

    const dataContent: SectionsCourse[] = [
        {
            id: '1',
            title: 'Introducción',
            classes: [
                {
                    id: '1',
                    title: 'Instalar programas',
                    typeContent: 'video',
                    urlContent: '',
                },
            ]
        },
    ];

    //* Methods.

    return {
        //* Attributes.
        dataDescription,
        dataRequirements,
        dataLearnings,
        dataInformationCourse,
        dataInstructor,
        dataContent,

        //* Methods.
    }


}
