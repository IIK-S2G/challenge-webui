import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

type ThemeState = {
    theme: number
}

const initialState: ThemeState = {
    theme: 0
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => { state.theme++ },
        resetTheme: (state) => { state.theme = 0 },
        setTheme: (state, action: PayloadAction<number>) => { state.theme = action.payload }
    }
})

export const { changeTheme, resetTheme, setTheme } = ThemeSlice.actions

export default ThemeSlice.reducer