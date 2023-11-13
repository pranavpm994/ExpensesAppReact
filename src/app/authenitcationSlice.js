import { createSlice } from '@reduxjs/toolkit';
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    token: '',
    isLoggedIn: false,
  },
  reducers: {
    userAuthenticated: (state, action) => {
      console.log('action: ', action);
      try {
        sessionStorage.setItem('token', action.payload.token);
      } catch (err) {
        console.log(err);
      }
      return {
        ...state,
        ...{
          token: action.payload.token,
          isLoggedIn: true,
        },
      };
    },
    logout: () => {
      sessionStorage.clear();
    },
  },
});

export const { userAuthenticated, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
