import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.mode = action.payload; // 'light' or 'dark'
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer