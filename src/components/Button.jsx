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
					<ShoppingCart weight="duotone" />
					Remove
				</>
			)}
			{props.type === "info" && <Info weight="duotone" />}
			{props.type === "close" && (
				<>
					<X weight="bold" />
					Close
				</>
			)}
		</button>
	);
};
