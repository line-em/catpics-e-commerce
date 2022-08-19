import { useEffect, useState } from "react";
import { Grid } from "../components/Grid";
import titles from "../data/titles";

export const Home = () => {
	const [catPics, setCatPics] = useState({});
	const [loading, setLoading] = useState(false);

	// Random price between 50 and 150
	const randomPrice = () => Math.floor(Math.random() * 151) + 50;
	const randomTitle = () => titles[Math.floor(Math.random() * titles.length)].title;

	const options = {
		method: "GET",
		headers: { "x-api-key": import.meta.env.VITE_API_KEY }
	};

	useEffect(() => {
		setLoading(true);
		fetch("https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,png", options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCatPics(
					data.map((pic) => {
						return {
							url: pic.url,
							title: randomTitle(),
							price: randomPrice(),
							width: pic.width,
							height: pic.height
						};
					})
				);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);
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
					catPics.map((pic, i) => {
						return <Grid catPics={pic} />;
					})
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	);
};

export default Home;
