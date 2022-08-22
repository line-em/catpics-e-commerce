import { useContext } from "react";
import { GridItem } from "../components/GridItem";
import { SiteContext } from "../context/SiteContext";

export const Home = () => {
	const { catPics } = useContext(SiteContext);
	console.log(catPics);
	return (
		<div>
			<h1>Hey there! 😺</h1>
			<p>
				This is a hypothetical store for all the kitty pics you want! Every refresh, new
				pics are shown to you. You can add them to your cart and checkout when you are
				ready. 😺
			</p>
			<p>
				<strong>Note:</strong> This is not a real store! Just a fun little project to study
				several React concepts.
			</p>

			<hr />
			<h1>This week Pics...</h1>
			<div className="grid_container">
				{catPics.length > 0 ? (
					catPics.map((pic) => {
						return <GridItem catPics={pic} key={pic.url} />;
					})
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	);
};

export default Home;
