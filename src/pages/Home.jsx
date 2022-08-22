import { ItemGrid } from "../components/ItemGrid";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { About } from "../components/About";

export const Home = () => {
	const { catPics, addToCart, removeFromCart } = useContext(SiteContext);

	const allItems = catPics.map((pic) => {
		return <ItemGrid key={pic.url} catPics={pic} type="shop" />;
	});
	return (
		<>
			<About />
			<hr />
			<h1>This session Pics...</h1>
			<section className="grid_container">
				{catPics.length > 0 ? allItems : <h2>Loading...</h2>}
			</section>
			<hr />
			<footer>
				Made by{" "}
				<a href="https://github.com/line-em" target="_blank" rel="noopener noreferrer">
					@Line-Em
				</a>{" "}
				with ❤️ and tea.
			</footer>
		</>
	);
};

export default Home;
