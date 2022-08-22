import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Cat } from "phosphor-react";
import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";

export const Nav = () => {
	const { catPics } = useContext(SiteContext);

	const itemsInCart = catPics.filter((pic) => pic.isInCart).length;

	console.log(itemsInCart);

	return (
		<nav className="navbar">
			<Link to="/">
				<h2>
					<Cat weight="duotone" />
					Cat Pics
				</h2>
			</Link>
			<NavLink to="/cart">
				<ul>
					<li>Your Cart:</li>
					<li>
						{itemsInCart > 0 ? (
							<span className="nav_cart_items">{itemsInCart}</span>
						) : null}
						<ShoppingCart size={20} weight={"bold"} />
					</li>
				</ul>
			</NavLink>
		</nav>
	);
};

export default Nav;
