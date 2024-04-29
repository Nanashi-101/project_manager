import { createSlice } from "@reduxjs/toolkit";

// The state of the slice is defined as an interface for type safety
type modalState = {
    isOpen: boolean;
}

interface modalSliceState {
    modal: modalState;
}

// The initial state of the slice is defined as an object
const initialState: modalSliceState = {
    modal: {
        isOpen: false
    }
}

// The slice is created using the createSlice function
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.modal.isOpen = true;
        },
        closeModal: (state) => {
            state.modal.isOpen = false;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;