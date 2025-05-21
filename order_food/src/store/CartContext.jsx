import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	addItem: item => {},
	removeItem: id => {},
});

function cartReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		// ...update the state to a meal item
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

		const updatedItems = [...state.items];

		if (existingCartItemIndex > -1) {
			const existingItem = state.items[existingCartItemIndex];
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems.push({ ...action.item, quantity: 1 });
		}

		return { ...state, items: updatedItems };
	}

	if (action.type === 'REMOVE_ITEM') {
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
		const updatedItems = [...state.items];
		const existingItem = state.items[existingCartItemIndex];
		if (existingItem.quantity > 1) {
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity - 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems.splice(existingCartItemIndex, 1);
		}

		return { ...state, items: updatedItems };
	}
}

export function CartContextProvider({ children }) {
	const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

	function addItem(item) {
		dispatchCartAction({
			type: 'ADD_ITEM',
			item: item,
		});
	}

	function removeItem(id) {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			id: id,
		});
	}

	const cartContext = {
		items: cart.items,
		addItem,
		removeItem,
	};

	return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
