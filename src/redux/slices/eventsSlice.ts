import {createSlice} from '@reduxjs/toolkit';
import {getEvents} from '../thunk/eventThunk';

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEvents.pending, state => {
        state.loading = true;
      })

      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })

      .addCase(getEvents.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventSlice.reducer;