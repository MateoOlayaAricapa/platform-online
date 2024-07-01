import { LazyExoticComponent, lazy } from "react";
import { Uuid } from "../../../config/uuid.adapter";

type JSXComponent = () => JSX.Element;

interface RoutesDashboard {
    id       : string;
    path     : string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

//* Aplicando lazy load para cada página del dashboard
const homePageLazy = lazy( () => import('../pages/home-page/home-page') );
const instructorPageLazy = lazy( () => import('../pages/instructor-page/instructor-page') );
const myCoursesPageLazy = lazy( () => import('../pages/my-courses-page/courses-page') );
const coursePageLazy = lazy( () => import('../pages/course-page/couser-page') );

export const routesDashboard: RoutesDashboard[] = [
    {
        path: '/home',
        Component: homePageLazy,
        id: Uuid.v4()
    },
    {
        path: '/instructor',
        Component: instructorPageLazy,
        id: Uuid.v4()
    },
    {
        path: '/my-courses',
        Component: myCoursesPageLazy,
        id: Uuid.v4()
    },
    {
        path: '/course',
        Component: coursePageLazy,
        id: Uuid.v4()
    }
];