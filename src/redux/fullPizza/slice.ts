import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza, statusType } from '../pizza/types';
import { fetchFullPizza } from './AsyncAction';
import { fullPizzaSliceState } from './types';

const initialState: fullPizzaSliceState = {
    item: {} as Pizza,
    status: "loading"
}

export const fullPizzaSlice = createSlice({
    name: 'fullPizza',
    initialState,
    reducers: {
        setItem(state, action) {
            state.item = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFullPizza.pending, (state) => {
            state.status = "loading";
            state.item = {} as unknown as Pizza;
        });
        builder.addCase(fetchFullPizza.fulfilled, (state, action: PayloadAction<Pizza>) => {
            state.status = "success";
            state.item = action.payload
        });
        builder.addCase(fetchFullPizza.rejected, (state) => {
            state.status = "error";
            state.item = {} as unknown as Pizza;
        })
    }
})


// Action creators are generated for each case reducer function
export const {
    setItem
} = fullPizzaSlice.actions

export default fullPizzaSlice.reducer