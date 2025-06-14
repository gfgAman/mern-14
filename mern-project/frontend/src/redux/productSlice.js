// productSlice.ts

import { createSlice} from '@reduxjs/toolkit'


const initialState= {
    product: {}
}

// Create the slice
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product = action.payload
        },
    }
})

// Export the action and reducer
export const { addProduct } = productSlice.actions
export default productSlice.reducer
