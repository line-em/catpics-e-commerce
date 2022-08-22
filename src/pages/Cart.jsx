import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";
import { ItemGrid } from "../components/ItemGrid";

function Cart() {
	const { catPics } = useContext(SiteContext);

	const itemsInCart = catPics.filter((pic) => pic.isInCart).length;
	const listInCart = catPics.filter((pic) => pic.isInCart);
	const total = listInCart.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<>
			<h1>Cart Items</h1>
			<div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}>
				<section className="grid_container grid_container_cart flex-75">
					{itemsInCart > 0 ? (
						<>
							{listInCart.map((pic) => {
								return <ItemGrid key={pic.url} catPics={pic} />;
							})}
						</>
					) : (
						<h2>No items in cart</h2>
					)}
				</section>
				{itemsInCart > 0 && (
					<article className="grid_container__total_price">
						<h2>Your Items:</h2>
						<hr />
						<ul>
							{listInCart.map((item) => (
								<li>{item.title}</li>
							))}
						</ul>
						<hr />
						<h3>Total Price:</h3>
						<span className="grid_container__price">${total}</span>
					</article>
				)}
			</div>
		</>
	);
}

export default Cart;
