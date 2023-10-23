import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./features/products/productSlice";
import serviceReducer from "./features/services/serviceSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        services: serviceReducer
    },
});