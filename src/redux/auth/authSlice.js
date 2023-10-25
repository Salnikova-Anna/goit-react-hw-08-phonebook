import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  registrationThunk,
} from './operations';

const initialState = {
  token: null,
  profile: { name: null, email: null },
  isRefreshing: false,
  isLoggedIn: false,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.profile = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.profile = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshFulfilled = (state, { payload }) => {
  state.profile = payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshPending = ({ isRefreshing }) => {
  isRefreshing = true;
};

const refreshRejected = ({ isRefreshing }) => {
  isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.pending, refreshPending)
      .addCase(refreshThunk.fulfilled, refreshFulfilled)
      .addCase(refreshThunk.rejected, refreshRejected)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
