import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { SiteContext } from "../context/SiteContext";
import { useContext } from "react";
import Logo from "./Logo";

export const Nav = () => {
	const { itemsInCart } = useContext(SiteContext);
	const itemsLength = itemsInCart.length;

	return (
		<nav className="navbar">
			<Logo />
			<NavLink to="/cart">
				<ul>
					<li>Cart:</li>
					<li>
						<span className="nav_cart_items">{itemsLength}</span>
						<ShoppingCart size={20} weight={"bold"} />
					</li>
				</ul>
			</NavLink>
		</nav>
	);
};

export default Nav;
