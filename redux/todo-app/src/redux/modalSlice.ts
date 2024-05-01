import { createSlice } from "@reduxjs/toolkit";

// The state of the slice is defined as an interface for type safety
type modalState = {
    isOpen: boolean;
    id: number;
    task: string;
    text: string;
}

interface modalSliceState {
    modal: modalState;
}

// The initial state of the slice is defined as an object
const initialState: modalSliceState = {
    modal: {
        isOpen: false,
        id: 0,
        task: "",
        text: ""
    }
}

// The slice is created using the createSlice function
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modal.isOpen = true;
            state.modal.id = action.payload.id;
            state.modal.task = action.payload.task;
            state.modal.text = action.payload.text;
        },
        closeModal: (state) => {
            state.modal.isOpen = false;
            state.modal.id = 0;
            state.modal.task = "";
            state.modal.text = "";
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;