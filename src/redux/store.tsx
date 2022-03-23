
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


import contactsReducer from './contactSlice';
import searchContactReducer from './searchContactSlice';
import toastReducer from './toastSlice';

export const store = configureStore({
  reducer:{
    contacts: contactsReducer,
    searchContacts: searchContactReducer,
    toast: toastReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;