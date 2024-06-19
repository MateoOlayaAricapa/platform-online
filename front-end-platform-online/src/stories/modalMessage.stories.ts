import { Meta, StoryObj } from '@storybook/react';
import { ModalMessage } from '../app/dashboard/components';

const meta = {
    title: 'COMPONENTS/Modal-Message',
    component: ModalMessage,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        type: { control: 'inline-radio' }
    }
} satisfies Meta<typeof ModalMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Creando historias.
export const Basic: Story = {
    args: {
        type: 'success',
        title: 'Guardado!',
        message: 'Información guardada correctamente',
        onClosed: () => { console.log('Ventana cerrada') }
    }
};