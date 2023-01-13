import PropTypes from "prop-types";
import { ShoppingCart, X, Info } from "phosphor-react";

export const Button = (props) => {
	return (
		<button className={`btn ${props.classes}`} onClick={() => props.handleFunction()}>
			{props.type === "addCart" && (
				<>
					<ShoppingCart weight="duotone" size={20} />
					Add to Cart
				</>
			)}
			{props.type === "removeCart" && (
				<>
					<ShoppingCart weight="duotone" size={20} />
					Remove
				</>
			)}
			{props.type === "info" && <Info weight="duotone" />}
			{props.type === "close" && (
				<>
					<X weight="bold" />
					{/* Close */}
				</>
			)}
			{props.type === "checkout" && (
				<>
					<ShoppingCart weight="duotone" size={20} />
					Checkout
				</>
			)}
		</button>
	);
};

Button.propTypes = {
	classes: PropTypes.string,
	type: PropTypes.string,
	handleFunction: PropTypes.func
};
