// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addContact, deleteContact, getContacts } from '../contacts/slice';

axios.defaults.baseURL = 'https://65b3c8d2770d43aba47a6ea2.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get('contacts');
    dispatch(getContacts(response.data));
    console.log(response.data);
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

// export const addContactThunk = (name, phone) => async dispatch => {
//   try {
//     await axios.post(`contacts/${name}&${phone}`);
//     dispatch(addContact(name, phone));
//   } catch (error) {
//     dispatch(error);
//   }
// };

// https://65b3c8d2770d43aba47a6ea2.mockapi.io/contacts

// const instance = axios.create({
//   baseURL: 'https://65b3c8d2770d43aba47a6ea2.mockapi.io',
// });

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await instance.get('/contacts');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
