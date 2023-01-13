import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isError: false,
    message: undefined
}

const errorsSlice = createSlice({
    initialState,
    name: 'errorsSlice',
    reducers: {
        resetError(state) {
            state.isError = false
            state.message = undefined
        },
        setError(state, { payload }) {
            state.isError = true
            state.message = payload
        }
    }
})

export const { resetError, setError } = errorsSlice.actions
export default errorsSlice