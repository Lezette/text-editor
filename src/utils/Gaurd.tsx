import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/user';

interface IProtectedRoute {
    component: any;
    Component: any;
    props: any;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({component: Component, ...props}) => {

    const { userInfo } = useContext(UserContext);
    console.log('============userInfo========================');
    console.log(userInfo);
    console.log('====================================');

    return (
        <Route
        {...props}
        render={innerProps => (userInfo.googleId  !== '' ? <Component {...innerProps} /> : <Redirect to="/login" />)
        }
      />
    );
};