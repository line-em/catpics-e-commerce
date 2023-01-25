import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import titles from "../data/titles";

const SiteContext = createContext();
const SiteContextProvider = ({ children }) => {
	const [catPics, setCatPics] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const randomPrice = () => Math.floor(Math.random() * 151) + 50;
	const randomTitle = () => titles[Math.floor(Math.random() * titles.length)].title;

	const options = {
		method: "GET",
		headers: { "x-api-key": import.meta.env.VITE_KEY }
	};

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(
				"https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,png",
				options
			);
			const data = await res.json();
			setIsLoading(false);
			setCatPics(
				data.map((pic) => {
					return {
						url: pic.url,
						title: randomTitle(),
						price: randomPrice(),
						width: pic.width,
						height: pic.height,
						isInCart: false
					};
				})
			);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleRefresh = () => {
		setRefresh(!refresh);
		return fetchData();
	};

	const itemsInCart = catPics.filter((pic) => pic.isInCart);

	const addToCart = (url) => {
		setCatPics(
			catPics.map((pic) => (pic.url === url ? { ...pic, isInCart: true } : pic))
		);
	};

	const removeFromCart = (url) => {
		setCatPics(
			catPics.map((pic) => (pic.url === url ? { ...pic, isInCart: false } : pic))
		);
	};

	const removeAll = () => {
		setCatPics(catPics.map((pic) => ({ ...pic, isInCart: false })));
	};

	return (
		<SiteContext.Provider
			value={{
				catPics,
				itemsInCart,
				addToCart,
				removeFromCart,
				removeAll,
				handleRefresh,
				isLoading
			}}
		>
			{children}
		</SiteContext.Provider>
	);
};

export { SiteContext, SiteContextProvider };

SiteContextProvider.propTypes = {
	children: PropTypes.any.isRequired
};
