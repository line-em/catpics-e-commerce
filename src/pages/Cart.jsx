import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";
import { GridItem } from "../components/GridItem";

function Cart() {
	const { cart } = useContext(SiteContext);
	return (
		<>
			<h1>Cart Items</h1>
			<div className="grid_container">
				{cart.length > 0 ? (
					<>
						{cart.map((pic) => {
							return <GridItem key={pic.url} catPics={pic} />;
						})}
						<hr />
						<strong>Total Price:</strong>
						<span>${cart.reduce((acc, curr) => acc + curr.price, 0)}</span>
					</>
				) : (
					<h2>No items in cart</h2>
				)}
			</div>
		</>
	);
}

export default Cart;
