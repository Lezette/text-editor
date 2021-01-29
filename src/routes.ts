import { lazy } from 'react';
import { Route } from 'react-router-dom';


const Login = lazy(() => import('./views/Login'));
const Editor = lazy(() => import('./views/Editor'));

export const routes = [
    {
        component: Login,
        path: '/',
        RouteType: Route,
    },
    {
        component: Editor,
        path: '/editor',
        RouteType: Route,
    },
];
