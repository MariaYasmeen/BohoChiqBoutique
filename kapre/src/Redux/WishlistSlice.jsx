import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.push(action.payload);
        },
        delFromWishlist(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addToWishlist, delFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
