import {createSlice} from '@reduxjs/toolkit';
import {getEvents} from '../thunk/eventThunk';

const eventsSlice = createSlice({
  name: 'events',

  initialState: {
    events: [],
    loading: false,
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getEvents.pending, state => {
      state.loading = true;
    });

    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload?.data || [];
    });

    builder.addCase(getEvents.rejected, state => {
      state.loading = false;
    });
  },
});

export default eventsSlice.reducer;
