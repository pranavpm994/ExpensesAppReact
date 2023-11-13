import { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { SignIn } from '../services/authentication';
import { useDispatch } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import ThirdPartySignIns from './ThirdPartySignIns';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isDemoSigningIn, setIsDemoSigningIn] = useState(false);
  const dispatch = useDispatch();
  function handleSignIn() {
    setIsSigningIn(true);
    SignIn(dispatch, { username, password }).then((response) => {
      console.log('SignInResponse');
      setIsSigningIn(false);
    });
  }
  function SignInDemo() {
    setIsDemoSigningIn(true);
    SignIn(dispatch, { username: 'pranav123', password: 'pranav123' }).then(
      (response) => {
        console.log('SignInResponse');
        setIsDemoSigningIn(false);
      }
    );
  }

  return (
    <div style={{ width: '30rem', margin: 'auto', paddingTop: '8px' }}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleSignIn();
        }}
      >
        <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='UserName'
            onChange={(event) => setUsername(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Password'
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          ></FormControl>
        </InputGroup>
        <div>
          <Button
            type='submit'
            variant='primary'
            style={{
              margin: 'auto',
              display: 'block',
              width: '10rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: 'inherit',
              }}
            >
              <MoonLoader color='white' loading={isSigningIn} size={20} />
              <span>{isSigningIn ? 'Signing In' : 'Sign In'}</span>
            </div>
          </Button>
          <Button
            onClick={SignInDemo}
            type='button'
            variant='primary'
            style={{
              // marginTop: '10px!important',
              margin: '10px auto auto',
              display: 'block',
              width: '10rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: 'inherit',
              }}
            >
              <MoonLoader color='white' loading={isDemoSigningIn} size={20} />
              <span>{isDemoSigningIn ? 'Signing In' : 'Demo Sign In'}</span>
            </div>
          </Button>
        </div>
      </Form>
      <ThirdPartySignIns />
    </div>
  );
};
export default SignInPage;
