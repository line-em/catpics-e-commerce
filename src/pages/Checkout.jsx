import { Link } from "react-router-dom";

export const Checkout = () => {
	return (
		<section class="grid_container__total_price">
			<h1>Thank you for your order!</h1>
			<hr />
			<Link to="/">
				<span className="btn">Back to Homepage</span>
			</Link>
		</section>
	);
};
