import { GridImage } from "./GridImage";
import { GridInfo } from "./GridInfo";
import PropTypes from "prop-types";

export const ItemGrid = ({ catPics, type }) => {
	const { url, title, price } = catPics;
	return (
		<article key={url}>
			<GridImage url={url} title={title} price={price} />
			<GridInfo url={url} title={title} price={price} type={type} />
		</article>
	);
};

ItemGrid.propTypes = {
	catPics: PropTypes.object,
	type: PropTypes.string
};
