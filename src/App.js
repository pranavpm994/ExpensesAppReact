import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userAuthenticated } from './app/authenitcationSlice';
import Navbar from './components/Navbar';

// function App() {
//   return 'Hello';
// }
const App = () => {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    // console.log('token: ', token);
    if (token !== undefined && token !== null) {
      // console.log('token1: ', { token });
      dispatch(userAuthenticated({ token })); //Make sure to make token an object using{}
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          // render={() => (isLoggedIn ? <HomePage /> : <SignInPage />)}
          element={isLoggedIn ? <HomePage /> : <SignInPage />}
        />
        <Route
          path='/signup'
          // render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)}
          element={isLoggedIn ? <Navigate to='/' /> : <SignUpPage />}
        />
        <Route
          path='/signin'
          // render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)}
          element={isLoggedIn ? <Navigate to='/' /> : <SignInPage />}
        />
        <Route Component={() => <h2>Page not found!!!</h2>} />
      </Routes>
    </Router>
  );

  // <SignUpPage />

  // <SignInPage />

  // <div style={{ width: '60%', margin: 'auto' }}>
  //   <ToastContainer />
  //   <h3>New Expense</h3>
  //   <ExpenseForm />
  //   <hr style={{ border: '1px solid grey' }} />
  //   <h3>Your Expesnses</h3>
  //   <ExpenseList />
  // </div>
};

export default App;
