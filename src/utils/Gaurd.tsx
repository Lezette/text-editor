import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/user';

export const ProtectedRoute = ({component: Component, ...props}: any) => {

    const { userInfo } = useContext(UserContext);

    return (
        <Route
        {...props}
        render={innerProps => (userInfo.googleId  !== '' ? <Component {...innerProps} /> : <Redirect to="/login" />)
        }
      />
    );
};