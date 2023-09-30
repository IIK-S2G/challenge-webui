import { createSlice } from "@reduxjs/toolkit"

type LangState = {
    lang: number
}

const initialState: LangState = {
    lang: 0
}

export const LangSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state) => { state.lang++ },
        resetLang: (state) => { state.lang = 0 },
        setLang: (state, action) => { state.lang = action.payload }
    }
})

export const { changeLang, resetLang, setLang } = LangSlice.actions

export default LangSlice.reducer