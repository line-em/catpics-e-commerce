import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import titles from "../data/titles";

const SiteContext = createContext();
const SiteContextProvider = ({ children }) => {
	const [catPics, setCatPics] = useState([]);

	const randomPrice = () => Math.floor(Math.random() * 151) + 50;
	const randomTitle = () => titles[Math.floor(Math.random() * titles.length)].title;

	const options = {
		method: "GET",
		headers: { "x-api-key": import.meta.env.VITE_KEY }
	};

	useEffect(() => {
		fetch("https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,png", options)
			.then((res) => res.json())
			.then((data) => {
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
			})
			.catch((err) => console.error(err));
	}, []);

	const itemsInCart = catPics.filter((pic) => pic.isInCart);

	const addToCart = (url) => {
		setCatPics(catPics.map((pic) => (pic.url === url ? { ...pic, isInCart: true } : pic)));
	};

	const removeFromCart = (url) => {
		setCatPics(catPics.map((pic) => (pic.url === url ? { ...pic, isInCart: false } : pic)));
	};

	const removeAll = () => {
		setCatPics(catPics.map((pic) => ({ ...pic, isInCart: false })));
	};

	return (
		<SiteContext.Provider
			value={{ catPics, itemsInCart, addToCart, removeFromCart, removeAll }}
		>
			{children}
		</SiteContext.Provider>
	);
};

export { SiteContext, SiteContextProvider };

SiteContextProvider.propTypes = {
	children: PropTypes.any.isRequired
};
