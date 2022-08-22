import { createContext, useEffect, useState } from "react";
import titles from "../data/titles";

const SiteContext = createContext();
const SiteContextProvider = ({ children }) => {
	const [catPics, setCatPics] = useState([]);
	// const [cart, setCart] = useState([]);

	// Random price between 50 and 150
	const randomPrice = () => Math.floor(Math.random() * 151) + 50;
	const randomTitle = () => titles[Math.floor(Math.random() * titles.length)].title;

	const options = {
		method: "GET",
		headers: { "x-api-key": "9ccd3bc8-48d1-481a-a7de-3f0f240b381c" }
		// headers: { "x-api-key": import.meta.env.VITE_API_KEY }
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

	const addToCart = (item) => {
		// setCart([...cart, item]);
		setCatPics(catPics.map((pic) => (pic.url === item.url ? { ...pic, isInCart: true } : pic)));
	};

	const removeFromCart = (item) => {
		// setCart(cart.filter((cartItem) => cartItem.url !== item.url));
		setCatPics(
			catPics.map((pic) => (pic.url === item.url ? { ...pic, isInCart: false } : pic))
		);
	};

	return (
		<SiteContext.Provider value={{ catPics, addToCart, removeFromCart }}>
			{children}
		</SiteContext.Provider>
	);
};

export { SiteContext, SiteContextProvider };
