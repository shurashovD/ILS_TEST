import { createSelector } from "@reduxjs/toolkit"

const getOrders = state => state.ordersSlice.orders
const getCheckedOrderId = state => state.ordersSlice.checkedOrderId

export default createSelector([getOrders, getCheckedOrderId], (orders, checkedOrderId) => {
    return orders.find(({ id }) => id === checkedOrderId)
})