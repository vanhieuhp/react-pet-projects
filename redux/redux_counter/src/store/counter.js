import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { value: 0, isShow: false };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		increase(state, action) {
			state.value += state.value + action.payload;
		},
		showCounter(state) {
			state.isShow = !state.isShow;
		},
	},
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
