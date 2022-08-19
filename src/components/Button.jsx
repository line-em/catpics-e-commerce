import { ShoppingCart, X } from "phosphor-react";

export const Button = (props) => {
	return (
		<button className={`btn ${props.classes}`} onClick={() => props.handleFunction()}>
			{props.type === "addCart" && (
				<>
					<ShoppingCart weight="duotone" />
					Add to Cart
				</>
			)}
			{props.type === "removeCart" && (
				<>
					<ShoppingCart weight="duotone" />
					Remove from Cart
				</>
			)}
			{props.type === "close" && (
				<>
					<X weight="bold" />
					Close
				</>
			)}
		</button>
	);
};
