import { useContext } from 'react';
import { useGoogleLogout } from 'react-google-login';
import { UserContext } from '../../context/user';
import { useHistory } from 'react-router-dom';


  const clientId = process.env.REACT_APP_CLIENT_ID as string;

const Logout = () => {

  const { setUserInfo } = useContext(UserContext);
  const history = useHistory();

  const onLogoutSuccess = () => {
    console.log('Logged out Success');
    setUserInfo({
      email: '',
      familyName: '',
      givenName: '',
      googleId: '',
      imageUrl: '',
      name: '',
    })
    history.push('/login');
  };

  const onFailure = () => {
    alert("Failed to signout");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default Logout;