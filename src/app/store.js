import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice'
import { homeApi } from '../services/homeService'

export const store = configureStore({
    reducer: {
        homeReducer,
        [homeApi.reducerPath]: homeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
    .concat(homeApi.middleware)
})