import { createSlice } from "@reduxjs/toolkit";
import { serviceData } from "../../../assets/data/data";


const initialState = {
    data: serviceData
}

export const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {}
});

export default serviceSlice.reducer;