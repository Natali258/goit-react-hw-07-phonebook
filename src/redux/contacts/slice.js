import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      });
  },
});

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const phoneBookReducer = phoneBookSlice.reducer;
