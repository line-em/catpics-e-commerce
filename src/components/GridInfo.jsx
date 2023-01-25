import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { useContext, useEffect } from "react";
import { SiteContext } from "../context/SiteContext";
import PropTypes from "prop-types";

export const GridInfo = ({ price, url, title, type }) => {
	const { addToCart, removeFromCart, itemsInCart } = useContext(SiteContext);

	return (
		<div
			className={`grid_container__info ${
				type === "shop" ? "" : type === "checkout" ? "grid_item__info" : "modal__price"
			}`}
		>
			<div>
				{type !== "shop" ? <h4>{title}</h4> : ""}
				<p className="grid_container__price">$ {price}</p>
			</div>
			{itemsInCart.some((item) => item.url === url) ? (
				<Button
					classes="btn-icon btn-red"
					type="removeCart"
					handleFunction={() => {
						removeFromCart(url);
					}}
				/>
			) : (
				<Button
					classes="btn-icon"
					type="addCart"
					handleFunction={() => {
						addToCart(url);
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
	type: PropTypes.string
};
