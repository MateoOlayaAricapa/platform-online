import { LazyExoticComponent, lazy } from "react";
import { Uuid } from "../../../config/uuid.adapter";

type JSXComponent = () => JSX.Element;

interface RoutesAuth {
    id       : string;
    path     : string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}


//* Aplicando lazy load para las páginas de autenticación
const loginPageLazy = lazy( () => import('../pages/login/login-page') );
const registerPageLazy = lazy( () => import('../pages/register/register-page') );

export const routesAuth: RoutesAuth[] = [
    {
        path: '/login',
        Component: loginPageLazy,
        id: Uuid.v4()
    },
    {
        path: '/register',
        Component: registerPageLazy,
        id: Uuid.v4()
    },
];