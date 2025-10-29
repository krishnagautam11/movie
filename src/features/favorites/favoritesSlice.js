import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.items.find(m => m.id === action.payload.id);
            if (!exists) state.items.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter(m => m.id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;