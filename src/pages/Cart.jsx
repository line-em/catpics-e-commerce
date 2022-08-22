import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";
import { GridItem } from "../components/GridItem";

function Cart() {
	const { catPics } = useContext(SiteContext);

	const itemsInCart = catPics.filter((pic) => pic.isInCart).length;
	const listInCart = catPics.filter((pic) => pic.isInCart);
	const total = listInCart.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<>
			<h1>Cart Items</h1>
			<div className="grid_container">
				{itemsInCart > 0 ? (
					<>
						{listInCart.map((pic) => {
							return <GridItem key={pic.url} catPics={pic} />;
						})}
						<hr />
						<strong>Total Price:</strong>
						<span>${total}</span>
					</>
				) : (
					<h2>No items in cart</h2>
				)}
			</div>
		</>
	);
}

export default Cart;
