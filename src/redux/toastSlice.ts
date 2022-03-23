import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Toast = {
  title: string;
  status: string;
}

export type toastType = {
  toast: {
    title: string,
    status: string,
  }
}

const initialState: toastType = {
  toast: {
    title: "",
    status: ""
  }
}

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, actions) => {
      state.toast = actions.payload;
    },

   },
});

export const { addToast } = toastSlice.actions;
export const getStateToast = (state: RootState) => state.toast.toast;

export default toastSlice.reducer;