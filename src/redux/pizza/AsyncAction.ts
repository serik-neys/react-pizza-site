import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaObj, pizzaParamsProps } from "./types";

export const fetchPizza = createAsyncThunk<PizzaObj, pizzaParamsProps>('pizza/fetchPizzasStatus',
async (params) => {
    const { category, sortBy, order, search, pagination } = params
    const { data } = await axios.get<PizzaObj>(
        `https://62a72f5a97b6156bff8996f3.mockapi.io/items?${pagination}${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    //thunkApi method: dispatch, getState and more...
    return data;
}
)
