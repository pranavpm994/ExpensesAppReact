import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../app/authenitcationSlice';

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();
  return (
    <Nav className='navbar' style={{ backgroudColor: '#e4fff2' }}>
      <h1 style={{ fontFamily: 'Brush Script MT, cursive' }}>My Expenses</h1>
      {isLoggedIn ? (
        <Button
          variant='link'
          href='/signin'
          onClick={() => dispatch(logout())}
        >
          Log Out
        </Button>
      ) : (
        <div style={{ display: 'flex' }}>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/signin' style={{ margin: '1rem' }}>
            Sign In
          </NavLink>
        </div>
      )}
    </Nav>
  );
};
export default Navbar;
