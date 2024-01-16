import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizza } from './AsyncAction';
import { PizzaObj, pizzaParamsProps, PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
    items: [],
    count: 0,
    status: Status.LOADING,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<PizzaObj>) => {
            state.count = action.payload.count
            state.items = action.payload.items
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizza.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
})



// Action creators are generated for each case reducer function
export const {
    setItems
} = pizzaSlice.actions

export default pizzaSlice.reducer


   // extraReducers: {
    // [fetchPizza.pending]: (state, action) => {
    //     state.status = "loading";
    //     state.items = [];
    // },
    // [fetchPizza.fulfilled]: (state, action) => {
    //     state.count = action.payload.count
    //     state.items = action.payload.items
    //     state.status = "success";
    // },
    // [fetchPizza.rejected]: (state) => {
    //     state.status = "error";
    //     state.items = [];
    // },
    // },