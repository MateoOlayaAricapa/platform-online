import { ReactElement } from 'react';
import './_layout-pages-menu.scss';

interface LayoutPagesMenuProps {
    children: ReactElement;
}

export const LayoutPagesMenu = ( { children }: LayoutPagesMenuProps ) => {

    return (
        <div className='layoutPagesMenu'>
            { children }
        </div>
    );

}
