import {createSlice} from '@reduxjs/toolkit';
import {loginUser} from '../thunk/authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(loginUser.rejected, state => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;