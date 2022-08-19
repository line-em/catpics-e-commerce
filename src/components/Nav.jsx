import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="navbar">
			<h2>
				<Link to="/">Cat Pics</Link>
			</h2>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
