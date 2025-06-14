// cartSlice.ts
import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find(item => item.name === action.payload.name)
      if (existing) {
        existing.quantity += action.payload.quantity || 1
      } else {
        state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 })
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.name !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
