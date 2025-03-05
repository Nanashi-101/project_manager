import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppProps{
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
} 

const initialState: IAppProps = {
    isSidebarCollapsed: false,
    isDarkMode: false
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    }
})

export const { setIsSidebarCollapsed, setIsDarkMode} = globalSlice.actions; 
export default globalSlice.reducer;