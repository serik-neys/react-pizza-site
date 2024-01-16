import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from "./filters/slice";
import cartReducer from "./cart/slice";
import pizzaReducer from "./pizza/slice";
import fullPizaReducer from "./fullPizza/slice";
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
    fullPizza: fullPizaReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 