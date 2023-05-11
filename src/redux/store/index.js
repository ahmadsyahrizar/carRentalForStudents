import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

// store is a place for accessing global state management
const store = configureStore({
    reducer: {
        auth: authSlice
    }
});

export default store;
