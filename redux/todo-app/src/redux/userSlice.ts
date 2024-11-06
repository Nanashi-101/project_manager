import { createSlice } from "@reduxjs/toolkit";

type user ={
    name: string,
    email: string,
    password: string
    isAuthenticated: boolean
}

interface userSliceState {
    user: user[],
}

const initialState: userSliceState = {
    user: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.user.push(action.payload);
        },
        removeUser: (state, action) => {
            state.user = state.user.filter(user => user.email !== action.payload.email);
        },
        loginUser: (state, action) => {
            state.user = state.user.map(user => {
                if(user.email === action.payload.email && user.password === action.payload.password){
                    return {
                        ...user,
                        isAuthenticated: true
                    }
                }
                return user;
            })
        },
        logoutUser: (state, action) => {
            state.user = state.user.map(user => {
                if(user.email === action.payload.email){
                    return {
                        ...user,
                        isAuthenticated: false
                    }
                }
                return user;
            })
        }
    }
});

export const { addUser, removeUser, loginUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;