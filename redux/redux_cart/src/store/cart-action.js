import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const FIREBASE_REALTIME_DB_URL = 'change me!';

export const fetchCartData = () => {
	return async dispatch => {
		const fetchRequest = async () => {
			const response = await fetch(FIREBASE_REALTIME_DB_URL);

			if (!response.ok) {
				throw new Error('Fetching cart data failed!');
			}

			return response.json();
		};

		try {
			const cartData = await fetchRequest();
			dispatch(cartActions.replaceCart(cartData));
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					title: 'Fetching cart failed!',
					message: error.message,
					status: 'error',
				})
			);
		}
	};
};

export const sendCartData = cart => {
	return async dispatch => {
		dispatch(
			uiActions.showNotification({
				title: 'Cart sending...',
				message: 'Sending your cart data...',
				status: 'success',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(FIREBASE_REALTIME_DB_URL, {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (!response.ok) {
				throw new Error('Sending cart data failed!');
			}
		};

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					title: 'Cart saved!',
					message: 'Your cart data has been saved successfully!',
					status: 'success',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					title: 'Saving cart failed!',
					message: error.message,
					status: 'error',
				})
			);
		}
	};
};
