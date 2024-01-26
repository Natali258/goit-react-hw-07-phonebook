import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
export const phoneBookReducer = phoneBookSlice.reducer;
export const { deleteContact, addContact, changeFilter } =
  phoneBookSlice.actions;
