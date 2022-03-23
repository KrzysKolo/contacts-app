import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type SearchContact = {
  searchData: string;
}

export type searchContactType = {
  searchContact: SearchContact | string,
  trim: () => void;
  toLowerCase: () => void;
}

const initialState: searchContactType = {
  searchContact: (""),
  trim: function (): void {
    throw new Error('Function not implemented.');
  },
  toLowerCase: function (): void {
    throw new Error('Function not implemented.');
  }
}

const searchContactSlice = createSlice({
  name: "searchContacts",
  initialState,
  reducers: {
    searchContacts: (state, actions) => {
      state.searchContact = actions.payload;
    },
   },
});



export const { searchContacts } = searchContactSlice.actions;
export const getSearchContact = (state: RootState) => state.searchContacts.searchContact;

export default searchContactSlice.reducer;