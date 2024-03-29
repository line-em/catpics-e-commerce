import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { ItemGrid } from "../components/ItemGrid";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

function Cart() {
	const { itemsInCart, removeAll } = useContext(SiteContext);
	const navigate = useNavigate();

	const itemsLength = itemsInCart.length;
	const total = itemsInCart.reduce((acc, curr) => acc + curr.price, 0);

	const fulfillOrder = () => {
		navigate("../checkout", { replace: true });
		removeAll();
	};

	return (
		<section className="base-wrapper base-wrapper__style">
			<header>
				<ShoppingCart size={50} weight={"duotone"} color="var(--purple-accent)" />
				<h1>Cart Items</h1>
			</header>
			<hr />
			<div className="grid_container__outer_cart">
				<section className={`grid_container grid_container_cart`}>
					{itemsLength > 0 ? (
						<>
							{itemsInCart.map((pic) => {
								return <ItemGrid key={pic.url} catPics={pic} type="checkout" />;
							})}
						</>
					) : (
						<h4>No items in cart</h4>
					)}
				</section>
				{itemsLength > 0 && (
					<article className="grid_container__total_price">
						<h2>Your Items:</h2>
						<hr />
						<ul>
							{itemsInCart.map((item) => (
								<li key={item.url}>{item.title}</li>
							))}
						</ul>
						<hr />
						<h3>Total Price:</h3>
						<span className="grid_container__price">${total}</span>
						<hr />
						<Button type="checkout" classes="btn-icon" handleFunction={fulfillOrder} />
					</article>
				)}
			</div>
		</section>
	);
}

export default Cart;
