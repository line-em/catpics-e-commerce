import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";
import { ItemGrid } from "../components/ItemGrid";
import { Button } from "../components/Button";

function Cart() {
	const { itemsInCart, removeAll } = useContext(SiteContext);

	const itemsLength = itemsInCart.length;
	const total = itemsInCart.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<>
			<h1>Cart Items</h1>
			<div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}>
				<section
					className={`grid_container grid_container_cart ${itemsLength > 0 && "flex-75"}`}
				>
					{itemsLength > 0 ? (
						<>
							{itemsInCart.map((pic) => {
								return <ItemGrid key={pic.url} catPics={pic} />;
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
						<Button type="checkout" classes="btn-icon" handleFunction={removeAll} />
					</article>
				)}
			</div>
		</>
	);
}

export default Cart;
