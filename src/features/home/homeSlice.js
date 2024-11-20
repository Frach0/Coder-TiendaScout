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

export const {setCategory} = homeSlice.actions

export default homeSlice.reducer