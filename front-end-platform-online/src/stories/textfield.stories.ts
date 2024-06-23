import { Meta, StoryObj } from "@storybook/react";
import { Textfield } from "../components/textfield/textfield";

const meta = {
    title: 'COMPONENTS/Textfield',
    component: Textfield,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        className: { control: 'text' },
        type: { control: 'inline-radio' }
    }
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Historias.
export const Basic: Story = {
    args: {
        type: 'text',
        title: 'Título de prueba',
        placeHolder: 'Ingresa un valor',
        className: 'textfield-custom'
    }
};

export const TextArea: Story = {
    args: {
        type: 'textArea',
        title: 'Modifica el título',
        className: 'textfield-custom-textarea'
    }
}