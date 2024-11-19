import { createSlice } from "@reduxjs/toolkit"

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        value: {
            categorySelected: ""
        }
    },
    reducers: {
        setCategory: (state, action) => {
            state.value.categorySelected = action.payload
        }
    }
})