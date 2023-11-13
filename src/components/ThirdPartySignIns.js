// import { GoogleLogin } from 'react-google-login';
import { ThirdPartySignIn } from '../services/authentication';
import { useDispatch } from 'react-redux';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const ThirdPartySignIns = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        textAlign: '-webkit-center',
        marginTop: '1rem',
      }}
    >
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(r) => {
            console.log(r);
            ThirdPartySignIn(dispatch, r.credential);
          }}
          onFailure={(e) => console.log('Error1!!!', e)}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default ThirdPartySignIns;
// onSuccess={(r) => ThirdPartySignIn(dispatch, r.tokenId)}
// onFailure={(e) => console.log('Error1!!!', e)}
