import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../services/api';

export const getEvents = createAsyncThunk(
  'events/getEvents',
  async () => {
    const response = await api.get('events-listing');
    return response.data;
  },
);