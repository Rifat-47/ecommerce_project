import {useContext} from 'react';
import Modal from '../../Layout/Modal';
import classes from "./Cart.module.css";
import CartContext from './../store/cart_context';
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
		// cartCtx.addItem(item);
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	console.log(cartCtx.items)
	const cartItems = (
		<ul className={`${classes['cart-items']} hello`}>
			{
				cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						price={item.price}
						onRemove={cartItemRemoveHandler.bind(null, item.id)}
						onAdd={cartItemAddHandler.bind(null, item)}
					/>
				))
			}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>Close</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;