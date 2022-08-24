import { Button } from "./Button";
import { Modal } from "./Modal";
import PropTypes from "prop-types";
import { useToggle } from "../hooks/useToggle";

export const GridImage = ({ url, title, price, isInCart }) => {
	const [showModal, toggleModal] = useToggle(false);
	const [hover, toggleHover] = useToggle(false);

	return (
		<>
			<div
				className="grid_container__img"
				onClick={() => toggleModal()}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<div className={`grid__hoverElement ${hover ? "display" : "display_none"}`}>
					<Button classes="btn-round" type="info" handleFunction={() => toggleModal} />
				</div>
				<img src={url} alt={title} />
			</div>
			<Modal
				url={url}
				title={title}
				price={price}
				isInCart={isInCart}
				showModal={showModal}
				toggleModal={toggleModal}
			/>
		</>
	);
};

GridImage.propTypes = {
	price: PropTypes.number,
	url: PropTypes.string,
	title: PropTypes.string,
	isInCart: PropTypes.bool
};
