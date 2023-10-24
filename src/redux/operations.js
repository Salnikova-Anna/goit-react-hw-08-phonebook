import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const response = await instance.post('/contacts', newContact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk('deleteContact', async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
});
