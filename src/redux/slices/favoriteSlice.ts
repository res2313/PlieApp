import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavouriteState {
  favourites: string[];
}

const initialState: FavouriteState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,

  reducers: {
    toggleFavourite: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const exists = state.favourites.includes(id);

      if (exists) {
        state.favourites = state.favourites.filter(
          item => item !== id,
        );
      } else {
        state.favourites.push(id);
      }
    },
  },
});

export const {toggleFavourite} =
  favouriteSlice.actions;

export default favouriteSlice.reducer;