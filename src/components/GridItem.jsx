import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { useContext, useEffect } from "react";
import { SiteContext } from "../context/SiteContext";

export const GridItem = ({ catPics }) => {
	const { url, title, price, width, height } = catPics;
	const [showModal, toggleModal] = useToggle(false);
	const [hover, toggleHover] = useToggle(false);
	const [isInCart, toggleIsInCart] = useToggle(false);

	const { cart, addToCart, removeFromCart } = useContext(SiteContext);

	return (
		<>
			<div className={` grid_container__item`} key={url}>
				<div
					className="grid_container__img"
					onClick={() => toggleModal()}
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<div className={`grid__hoverElement ${hover ? "display" : "display_none"}`}>
						<Button
							classes="btn-round"
							type="info"
							handleFunction={() => toggleModal}
						/>
					</div>
					<img src={url} alt={title} />
				</div>
				<div className="grid_container__info">
					<p className="grid_container__price">$ {price}</p>
					{isInCart ? (
						<Button
							classes="btn-icon btn-red"
							type="removeCart"
							handleFunction={() => {
								removeFromCart(catPics);
								console.log(cart);
								toggleIsInCart();
							}}
						/>
					) : (
						<Button
							classes="btn-icon"
							type="addCart"
							handleFunction={() => {
								addToCart(catPics);
								console.log(cart);
								toggleIsInCart();
							}}
						/>
					)}
				</div>
				<Modal
					url={url}
					title={title}
					price={price}
					showModal={showModal}
					toggleModal={toggleModal}
				/>
			</div>
		</>
	);
};
