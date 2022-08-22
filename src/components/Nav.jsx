import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Cat } from "phosphor-react";
import { SiteContext } from "../context/SiteContext";
import { useContext, useEffect } from "react";

export const Nav = () => {
	const { catPics } = useContext(SiteContext);
	const itemsInCart = catPics.filter((pic) => pic.isInCart).length;

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
						<span className="nav_cart_items">{itemsInCart}</span>
						<ShoppingCart size={20} weight={"bold"} />
					</li>
				</ul>
			</NavLink>
		</nav>
	);
};

export default Nav;
