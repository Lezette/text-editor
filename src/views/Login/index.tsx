import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { UserContext } from '../../context/user';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const Login = () => {

  const { setUserInfo } = useContext(UserContext);
  const history = useHistory();

  const clientId = process.env.REACT_APP_CLIENT_ID as string;

  const classes = useStyles();

  const onSuccess = (res: any) => {
    refreshTokenSetup(res);
    setUserInfo(res.profileObj);
    history.push('/');
  };

  const onFailure = (res: any) => {
    alert(
      `Failed to login. Please try loggin in again`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });


  
  return (
    <div className={classes.root}>
       <button onClick={signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
    </div>
  );
};

export default Login;