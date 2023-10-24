import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  registrationThunk,
} from './operations';

const initialState = {
  token: '',
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const handleLogOutFulfilled = state => {
  state.profile = null;
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
