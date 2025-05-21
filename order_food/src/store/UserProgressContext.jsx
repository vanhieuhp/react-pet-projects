import { createContext, useState } from 'react';

const UserProgressContext = createContext({
	progress: '', // cart, checkout
	showCart: () => {},
	hideCart: () => {},
	showCheckout: () => {},
	hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState('');

	function showCart() {
		setUserProgress('cart');
	}

	function hideCart() {
		setUserProgress('');
	}

	function showCheckout() {
		setUserProgress('checkout');
	}

	function hideCheckout() {
		setUserProgress('');
	}

	const UserProcessCtx = {
		progress: userProgress,
		showCart,
		hideCart,
		showCheckout,
		hideCheckout,
	};

	return <UserProgressContext value={UserProcessCtx}>{children}</UserProgressContext>;
}

export default UserProgressContext;
