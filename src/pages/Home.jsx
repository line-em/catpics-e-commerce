import { ItemGrid } from "../components/ItemGrid";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { About } from "../components/About";
import { Cat } from "phosphor-react";

export const Home = () => {
	const { catPics, isLoading } = useContext(SiteContext);

	const allItems = catPics.map((pic) => {
		return <ItemGrid key={pic.url} catPics={pic} type="shop" />;
	});
	return (
		<>
			<About />
			<section className="base-wrapper base-wrapper__style">
				<header>
					<Cat size={50} weight={"duotone"} color="var(--purple-accent)" />
					<h1>This session Pics...</h1>
				</header>
				<hr />
				<section className="grid_container">
					{isLoading ? <h2>Loading...</h2> : catPics.length > 0 && allItems}
				</section>
				<hr />

				<footer>
					Made by
					<a
						href="https://github.com/line-em"
						target="_blank"
						rel="noopener noreferrer"
					>
						@Line-Em
					</a>
					with ❤️ and tea.
				</footer>
			</section>
		</>
	);
};

export default Home;
