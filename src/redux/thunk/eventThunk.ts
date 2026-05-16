import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../services/api';

export const getEvents = createAsyncThunk(
  'events/getEvents',
  async (_, thunkAPI) => {
    try {
      // GET TOKEN FROM REDUX
      const state: any = thunkAPI.getState();

      const token = state.auth.token;

      const response = await api.post(
        'events-listing',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
      );

      const events = response?.data?.data?.events || [];

      return events.map((item: any) => ({
        id: item?.event_date_id?.toString(),
        title: item?.event_name,
        date: item?.readable_from_date,
        price:
          item?.event_price_from === 0
            ? 'Free'
            : `€${item?.event_price_from} - €${item?.event_price_to}`,
        location: `${item?.city}, ${item?.country}`,
        tags: item?.keywords || [],
        image: item?.event_profile_img,
      }));
    } catch (error: any) {
      console.log(error?.response?.data);

      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  },
);