import axios from 'axios';
import { userAuthenticated } from '../app/authenitcationSlice';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    const { data } = await axiosInstance.post('/signup', credentials);
    dispatch(userAuthenticated(data));
  } catch {
    console.log('Error!!');
  }
};

export const SignIn = async (dispatch, credentials) => {
  console.log('Credentials', credentials);
  try {
    const { data } = await axiosInstance.post('/signin', credentials);
    // const { data } = await axios.post(
    //   'https://localhost:44359/Authentication/signin',
    //   credentials
    // );
    dispatch(userAuthenticated(data));
  } catch (err) {
    console.error('Error response:', err);
  }
};
export const ThirdPartySignIn = async (dispatch, token) => {
  try {
    const { data } = await axiosInstance.post(`/google?token=${token}`);
    dispatch(userAuthenticated(data));
  } catch (err) {
    console.error('Error response:', err);
  }
};
