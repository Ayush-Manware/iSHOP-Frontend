import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            state.push({ ...action.payload, qty: 1 });
        },
        increment: (state, action) => {
            const productNumber = state.find((f) => f.id === action.payload);
            productNumber.qty += 1;
        },
        decrement: (state, action) => {
            const productNumber = state.find((f) => f.id === action.payload);
            if (productNumber.qty > 1) {
                productNumber.qty -= 1;
            }
        },
        removeItem: (state, action) => {
            const indexToRemove = state.findIndex((f) => f.id === action.payload);
            if (indexToRemove !== -1) {
                state.splice(indexToRemove, 1);
            }
        }
    }
});

export const { addTocart, increment, decrement, removeItem } = Slice.actions;
export default Slice.reducer;
