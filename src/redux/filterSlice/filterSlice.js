import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const filterValue = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterValueReducer = filterValue.reducer;
export const { changeFilter } = filterValue.actions;
export const selectFilter = state => state.filter.filter;
