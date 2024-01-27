// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addContact, deleteContact, getContacts } from '../contacts/slice';

axios.defaults.baseURL = 'https://65b3c8d2770d43aba47a6ea2.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get('contacts');
    dispatch(getContacts(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactThunk = id => async dispatch => {
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(error);
  }
};

export const addContactThunk = body => async dispatch => {
  try {
    await axios.post('contacts', body);
    dispatch(addContact(body));
  } catch (error) {
    dispatch(error);
  }
};
