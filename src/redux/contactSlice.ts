import { createSlice } from '@reduxjs/toolkit';
import { Contacts } from '../models/appModels';
import { RootState } from './store';

export type contactStateType = {
  contacts: Contacts[],
  success: boolean,
  loading: boolean,
}

const initialState: contactStateType = {
  contacts: [],
  success: true,
  loading: true,
}

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getContacts: (state, actions) => {
      state.contacts = actions.payload;
    },
    addContact: (state, actions) => {
      state.contacts.unshift(actions.payload);
    },
    removeContact: (state, actions) => {
      state.contacts = actions.payload
    },
    updateContact: (state, actions) => {
      state.contacts = actions.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  },
});

export const { getContacts, addContact, removeContact, updateContact, setSuccess, setLoading } = contactSlice.actions;
export const getAllContacts = (state: RootState) => state.contacts.contacts;
export const addNewContact = (state: RootState) => state.contacts.contacts;
export const removeOneContact = (state: RootState) => state.contacts.contacts;
export const isSuccess = (state: RootState) => state.contacts.success;
export const isLoading = (state: RootState) => state.contacts.loading;
export default contactSlice.reducer;