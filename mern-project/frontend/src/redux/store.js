import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './productSlice'


export const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice
    },
})

