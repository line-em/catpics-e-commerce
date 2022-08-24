import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { useContext, useEffect } from "react";
import { SiteContext } from "../context/SiteContext";
import PropTypes from "prop-types";

export const GridInfo = ({ price, url, title, type, isInCart }) => {
	const [inCart, toggleInCart] = useToggle(false);
	const { addToCart, removeFromCart } = useContext(SiteContext);

	useEffect(() => {
		if (isInCart) {
			toggleInCart(true);
		}
	}, []);

	return (
		<div className={`grid_container__info ${type !== "shop" ? "flex_column" : ""}`}>
			{type !== "shop" ? <h4>{title}</h4> : ""}
			<p className="grid_container__price">$ {price}</p>
			{inCart ? (
				<Button
					classes="btn-icon btn-red"
					type="removeCart"
					handleFunction={() => {
						removeFromCart(url);
						toggleInCart();
					}}
				/>
			) : (
				<Button
					classes="btn-icon"
					type="addCart"
					handleFunction={() => {
						addToCart(url);
						toggleInCart();
					}}
				/>
			)}
		</div>
	);
};

GridInfo.propTypes = {
	price: PropTypes.number,
	url: PropTypes.string,
	title: PropTypes.string,
	type: PropTypes.string,
	isInCart: PropTypes.bool
};
