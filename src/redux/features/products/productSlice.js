import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../../assets/data/data";


const initialState = {
    data: productData
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
});

export default productSlice.reducer;