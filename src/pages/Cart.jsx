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
			<section className="grid_container grid_container_cart">
				{itemsInCart > 0 ? (
					<>
						{listInCart.map((pic) => {
							return <ItemGrid key={pic.url} catPics={pic} />;
						})}
						<article className="grid_container__total_price">
							<h3>Total Price:</h3>
							<span className="grid_container__price">${total}</span>
						</article>
					</>
				) : (
					<h2>No items in cart</h2>
				)}
			</section>
		</>
	);
}

export default Cart;
