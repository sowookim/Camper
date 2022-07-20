import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface modal {
  signUpModal: boolean;
  modalText: string;
};

const initialState: modal = {
  signUpModal: false,
  modalText:''
};

const modalBox = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showSignUpModal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.signUpModal = payload;
    },

    insertText: (state: modal, { payload }: PayloadAction<string>) => {
      state.modalText = payload;
    }
  }
});

export const {
  showSignUpModal,
  insertText,
} = modalBox.actions;

export default modalBox.reducer;