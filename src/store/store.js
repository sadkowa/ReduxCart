import { createSlice, configureStore } from "@reduxjs/toolkit";

const visibilityInitialState = { cartIsShown: false };

const cartVisibilitySlice = createSlice({
	name: "cartVisibility",
	initialState: visibilityInitialState,
	reducers: {
		toggle(state, action) {
			state.cartIsShown = !state.cartIsShown;
		},
	},
});

const store = configureStore({
	reducer: cartVisibilitySlice.reducer,
});

export const cartVisibilityActions = cartVisibilitySlice.actions;

export default store;
