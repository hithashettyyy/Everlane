import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopReducer";

const store = configureStore({
   reducer:{
    shop : shopReducer
   }
})

export default store