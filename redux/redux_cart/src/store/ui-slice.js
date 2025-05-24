import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		cartIsVisible: false,
		notification: null,
	},
	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showNotification(state, action) {
			const notify = action.payload;
			state.notification = {
				title: notify.title,
				message: notify.message,
				staus: notify.status,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
