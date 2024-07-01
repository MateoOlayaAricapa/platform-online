import { Meta, StoryObj } from '@storybook/react';
import { SectionExtra } from '../app/dashboard/pages/course-page/components';

const meta = {
    title: 'COURSE-PAGE/SectionExtraCourse',
    component: SectionExtra,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof SectionExtra>

export default meta;

type Story = StoryObj<typeof meta>;

//* Creando historia
export const Basic: Story = {
    args: {
        title: '',
        extraData: [
            'Conocer y desarrollar microservicios',
            'Conocer y desarrollar microservicios',
            'Conocer y desarrollar microservicios',
            'Conocer y desarrollar microservicios'
        ]
    }
};