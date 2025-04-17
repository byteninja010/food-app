import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    //It's reducers because it consist of too many small functions hence known as reducers
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            //It more like does it to the copy like not to the real or orignal state
            //It is creating a copy not changing by refrencing
            //state=[];
            //The above syntax does not work As it is not mutating it

            //Either mutate the existing state or return a new state
            state.items.length=0;
            //return []; -> This works completely fine
        }
    }
});
//We are exporting a big main reducer so it's reducer not reducers
export default cartSlice.reducer;
export const {addItem,removeItem,clearCart}=cartSlice.actions;