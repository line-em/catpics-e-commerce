import { Confetti } from "phosphor-react";
import { Link } from "react-router-dom";

export const Checkout = () => {
	return (
		<section className="base-wrapper base-wrapper__style">
			<section class="grid_container__total_price">
				<header>
					<Confetti size={50} weight={"duotone"} color="var(--purple-accent)" />
					<h1>Thank you for your order!</h1>
				</header>
				<hr />
				<Link to="/">
					<span className="btn">Back to Homepage</span>
				</Link>
			</section>
		</section>
	);
};
