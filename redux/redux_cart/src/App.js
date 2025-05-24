import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/notify/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';

let firstInitial = true;

function App() {
	const cart = useSelector(state => state.cart);
	const notification = useSelector(state => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (firstInitial) {
			firstInitial = false;
			return;
		}

		if (!cart.changed) {
			return;
		}

		dispatch(sendCartData(cart));
	}, [cart, dispatch]);

	const showCart = useSelector(state => state.ui.cartIsVisible);
	return (
		<>
			{notification && <Notification {...notification} />}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
