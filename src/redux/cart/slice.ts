import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../utils/cart/getCartFromLS';

import { priceSum } from '../../utils/cart/priceSum';
import { CartItem, CartSlliceState } from './types';

const { items, totalPrice } = getCartFromLS()

const initialState: CartSlliceState = {
    totalPrice: totalPrice,
    items: items
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(item => item.id === action.payload.id)
            
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            
            state.totalPrice = priceSum(state.items)

        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(item => item.id === action.payload)
            if(findItem && findItem.count > 1) {
                findItem.count--;
                state.totalPrice = state.totalPrice - findItem.price;
            } 
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload)

            state.totalPrice = priceSum(state.items)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        }
    },
})


// Action creators are generated for each case reducer function
export const {
    addItem,
    removeItem,
    clearItems,
    minusItem
} = cartSlice.actions

export default cartSlice.reducer