import { useDispatch } from "react-redux";
import { cartVisibilityActions } from "../../store/store";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const dispatch = useDispatch();

	const toggleButtonHandler = () => {
		dispatch(cartVisibilityActions.toggle());
	};

	return (
		<button onClick={toggleButtonHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
