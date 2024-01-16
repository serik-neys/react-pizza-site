import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "../pizza/types";

export const fetchFullPizza = createAsyncThunk<Pizza, string>('pizza/fullFetchetchPizzaStatus',
    async (id) => {
        const { data } = await axios.get(
            `https://62a72f5a97b6156bff8996f3.mockapi.io/items/${id}`
        )
        return data;
    }
)