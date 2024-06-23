import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/select/select";
import { Option } from "../components/select/option";

const meta = {
    title: 'COMPONENTS/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        styleOption: { control: 'object', description: 'Inline styles for the option element', }
    }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Historias.
const childrenOptions = [
    React.createElement( Option, { value: 'Option 1' }, 'Option 1' ),
    React.createElement( Option, { value: 'Option 2' }, 'Option 3' ),
    React.createElement( Option, { value: 'Option 3' }, 'Option 2' ),
];

export const Basic: Story = {
    args: {
        children: childrenOptions
    }
};

export const OnChange: Story = {
    args: {
        children: childrenOptions,
        onChange: ({ name, value }) => { console.log( { name, value }) }
    }
};

export const InitialValue: Story = {
    args: {
        title: 'Title select',
        initialValue: 'Selected',
        children: childrenOptions,
    }
}