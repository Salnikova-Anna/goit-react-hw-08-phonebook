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
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.profile = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
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
      .addCase(refreshThunk.fulfilled, refreshFulfilled)
      .addCase(refreshThunk.rejected, ({ isRefreshing }) => {
        isRefreshing = false;
      })
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
