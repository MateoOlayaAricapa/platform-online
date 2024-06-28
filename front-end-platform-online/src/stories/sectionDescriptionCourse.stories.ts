import { Meta, StoryObj } from '@storybook/react';
import { SectionDescription } from '../app/dashboard/pages/course-page/components';

const meta = {
    title: 'COMPONENTS/SectionDescriptionCourse',
    component: SectionDescription,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof SectionDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

//* Creando historias
export const Basic: Story = {
    args: {
        data: {
            description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce ut ex sit amet nibh rhoncus dictum. Sed hendrerit faucibus nunc, 
                id lobortis nisi placerat eget. Nunc ornare, eros id molestie cursus, 
                erat ligula aliquam est, condimentum fringilla nulla libero et metus. 
                Nam ullamcorper tempus sem, at pretium diam mattis id. Suspendisse ut felis eros. 
                Nullam elementum est at nibh aliquet, ac varius tellus feugiat. 
                Vestibulum interdum metus ut nisi venenatis tristique.
            `,
            name: 'Mateo Olaya A.',
            photo: '',
            urlVideo: ''
        }
    }
}