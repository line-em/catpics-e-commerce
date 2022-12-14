import { GridImage } from "./GridImage";
import { GridInfo } from "./GridInfo";
import PropTypes from "prop-types";

export const ItemGrid = ({ catPics, type }) => {
	const { url, title, price, isInCart } = catPics;
	return (
		<article key={url}>
			<GridImage url={url} title={title} price={price} isInCart={isInCart} />
			<GridInfo url={url} title={title} price={price} isInCart={isInCart} type={type} />
		</article>
	);
};

ItemGrid.propTypes = {
	catPics: PropTypes.array,
	type: PropTypes.string
};
