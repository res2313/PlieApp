// redux/slices/authSlice.ts

import {createSlice} from '@reduxjs/toolkit';
import {loginUser} from '../thunk/authThunk';

const initialState = {
  user: null,
  token: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload?.data?.user;

        state.token = action.payload?.data?.token;
      })

      .addCase(loginUser.rejected, state => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;