import React, { useState, createContext } from 'react';

interface IUserInfo {
    email: string;
    familyName: string;
    givenName: string;
    googleId: string;
    imageUrl: string;
    name: string;
}

interface IUserContext {
  userInfo: IUserInfo,
  setUserInfo: (userInfo: any) => void,
}

    const _userInfo = {
        email: '',
        familyName: '',
        givenName: '',
        googleId: '',
        imageUrl: '',
        name: '',
    }

const UserContext = createContext<IUserContext>({ 
    userInfo: _userInfo,
    setUserInfo: () => true, 
});


const UserProvider = (props: any) => {
    const [userInfo, setUserInfo] = useState(_userInfo);

    return (
        <UserContext.Provider
            value={{ userInfo, setUserInfo }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvider };