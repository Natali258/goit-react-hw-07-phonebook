import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    getContacts: (state, action) => {
      state.contacts.items = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },

    addContact: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const phoneBookReducer = phoneBookSlice.reducer;
export const { deleteContact, addContact, changeFilter, getContacts } =
  phoneBookSlice.actions;
