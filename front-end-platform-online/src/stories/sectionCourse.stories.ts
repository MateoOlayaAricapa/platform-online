import { Meta, StoryObj } from "@storybook/react";
import { SectionCourse } from "../app/dashboard/components/section-course/section-course";

const meta = {
    title: 'COMPONENTS/SectionCourse',
    component: SectionCourse,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SectionCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Historias.
export const Basic: Story = {
    args: {
        typeOfUse: 'create',
        onChange: ( value ) => { console.log( value ) } 
    }
};

export const Show: Story = {
    args: {
        typeOfUse: 'show',
        initialSections: [
            { 
                id: '1', 
                title: 'Introducción',
                classes: [ 
                    { 
                        id: 'abc', 
                        title: 'Bienvenido al curso', 
                        typeContent: 'video',
                        urlContent: '' 
                    },
                    { 
                        id: 'abc2', 
                        title: 'Revisar lo siguiente', 
                        typeContent: 'video',
                        urlContent: '' 
                    }  
                ] 
            },
            { 
                id: '2', 
                title: 'Python',
                classes: [ 
                    { 
                        id: 'abc3', 
                        title: 'Descargar archivos', 
                        typeContent: 'video',
                        urlContent: '' 
                    },
                    { 
                        id: 'abc4', 
                        title: 'Instalar archivos', 
                        typeContent: 'video',
                        urlContent: '' 
                    }  
                ] 
            }
        ],
    }
}