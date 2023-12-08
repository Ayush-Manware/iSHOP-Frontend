import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"cart",
    initialState : [],
    reducers:{
        addTocart:(state, action)=>{
            state.push({...action.payload, qty : 1})
        },
        increment:(state, action)=>{
          const productNumber =  state.find((f) => f.id == action.payload)
          productNumber.qty += 1
          return state
        },
        decrement:(state, action)=>{
          const productNumber =  state.find((f) => f.id == action.payload)
          productNumber.qty -= 1
          return state
        },
    }
})

export const {addTocart, increment, decrement} = Slice.actions
export default Slice.reducer