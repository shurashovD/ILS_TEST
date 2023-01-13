import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import sagas from './sagas/sagas'
import geographyMapSlice from './geographyMapSlice'
import ordersSlice from './ordersSlice'
import errorsSlice from './errorsSlice'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    [errorsSlice.name]: errorsSlice.reducer,
    [ordersSlice.name]: ordersSlice.reducer,
    [geographyMapSlice.name]: geographyMapSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(), sagaMiddleware
  ]
})

sagaMiddleware.run(sagas)