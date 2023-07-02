import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './slice/tokenSlice'

export const store = configureStore({
    reducer: {
        token: tokenReducer
    },
})