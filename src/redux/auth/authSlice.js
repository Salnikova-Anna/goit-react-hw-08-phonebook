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
  isRefreshing: false,
  isLoggedIn: false,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.profile = null;
  state.token = '';
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.pending, ({ isRefreshing }) => {
        isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, ({ isRefreshing }) => {
        isRefreshing = false;
      })
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
