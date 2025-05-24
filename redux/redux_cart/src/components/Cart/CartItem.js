import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const CartItem = props => {
	const { id, name, quantity, total, price } = props.item;
	const dispatch = useDispatch();
	const handleAddItem = () => {
		dispatch(cartActions.addItemToCart(props.item));
	};

	const handleRemoveItem = () => {
		dispatch(cartActions.removeItemFromCart(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{name}</h3>
				<div className={classes.price}>
					${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={handleRemoveItem}>-</button>
					<button onClick={handleAddItem}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
