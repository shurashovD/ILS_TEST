import { createSlice } from "@reduxjs/toolkit";

const orders = [
    { id: 1, from: { lat: 59.84660399, lng: 30.29496392 }, to: { lat: 59.82934196, lng: 30.42423701 } },
    { id: 2, from: { lat: 59.82934196, lng: 30.42423701 }, to: { lat: 59.82761295, lng: 30.41705607 } },
    { id: 3, from: { lat: 59.83567701, lng: 30.38064206 }, to: { lat: 59.84660399, lng: 30.29496392 } },
    { id: 4, from: { lat: 59.84660399, lng: 30.29496392 }, to: { lat: 59.82761295, lng: 30.41705607 } },
    { id: 5, from: { lat: 59.83567701, lng: 30.38064206 }, to: { lat: 59.84660399, lng: 30.29496392 } },
]

const initialState = {
    checkedOrderId: undefined,
    orders
}

const ordersSlice = createSlice({
    initialState,
    name: 'ordersSlice',
    reducers: {
        resetCheckedOrderId(state) {
            state.checkedOrderId = undefined
        },
        setCheckedOrderId(state, { payload }) {
            state.checkedOrderId = payload
        }
    }
})

export const { resetCheckedOrderId, setCheckedOrderId } = ordersSlice.actions
export default ordersSlice