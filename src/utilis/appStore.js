import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"
const appStore=configureStore({
   //It's reducer Bhai main khud convince nhi hun T_T YE reducer hai bas yahi hai reducers nhi hai
   reducer:{
    cart:cartReducer
   }
});
export default appStore;