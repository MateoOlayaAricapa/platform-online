import { Meta, StoryObj } from '@storybook/react';
import { SectionData } from '../app/dashboard/pages/course-page/components';

const meta = {
    title: 'COMPONENTS/SectionDataCourse',
    component: SectionData,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof SectionData>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Creando historias
export const Basic: Story = {
    args: {
        data: {
            totalClasses: 450,
            createdAt: '25/06/2024',
            language: 'Español',
            totalSections: 150,
            title: 'NestJs + Microservicios: Aplicaciones escalables y modulares',
            topics: ['Front End', 'Software', 'Servicios en la nube'],
            totalTime: '450' 
        }
    }
};