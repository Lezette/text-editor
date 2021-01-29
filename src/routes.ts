import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from './utils/Gaurd';


const Login = lazy(() => import('./views/Login'));
const Editor = lazy(() => import('./views/Editor'));

export const routes = [
    {
        component: Login,
        path: '/login',
        RouteType: Route,
    },
    {
        component: Editor,
        path: '/',
        RouteType: ProtectedRoute,
    },
];
