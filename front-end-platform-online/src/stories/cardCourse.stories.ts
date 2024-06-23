import { Meta, StoryObj } from '@storybook/react';
import { CardCourse } from '../app/dashboard/components/card-course/card-course';

const meta = {
    title: 'COMPONENT/cardCourse',
    component: CardCourse,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof CardCourse>;

export default meta;

type Story = StoryObj<typeof CardCourse>;

//* Creando historia
export const Basic: Story = {
    args: {
        type: 'complete'
    }
};