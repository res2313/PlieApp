import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../services/api';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: any, thunkAPI) => {
    try {
      const response = await api.post('login', {
        email: data.email,
        password: data.password,
      });

      console.log('LOGIN API RESPONSE => ', response.data);

      return response.data;
    } catch (error: any) {
      console.log('LOGIN ERROR => ', error?.response?.data);

      return thunkAPI.rejectWithValue(
        error?.response?.data || {
          success: false,
          message: 'Login failed',
        },
      );
    }
  },
);