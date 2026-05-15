import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../services/api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: {email: string; password: string}) => {
    const response = await api.post('login', data);
    return response.data;
  },
);