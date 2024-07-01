import { Meta, StoryObj } from '@storybook/react';
import { SectionInstructor } from '../app/dashboard/pages/course-page/components';

const meta = {
    title: 'COURSE-PAGE/SectionInstructorCourse',
    component: SectionInstructor,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof SectionInstructor>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Creando historias
export const Basic: Story = {
    args: {
        data: {
            career: 'Profesión',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex sit amet nibh rhoncus dictum. Sed hendrerit faucibus nunc, id lobortis nisi placerat eget. Nunc ornare, eros id molestie cursus, erat ligula aliquam est, condimentum fringilla nulla libero et metus.',
            name: 'Mateo Olaya A.'
        }
    }
}