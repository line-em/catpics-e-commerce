import { Button } from "./Button";
import { GridInfo } from "./GridInfo";
import PropTypes from "prop-types";

export const Modal = ({ url, title, price, isInCart, showModal, toggleModal }) => {
	const modalStyle = {
		display: showModal ? "flex" : "none"
	};

	return (
		<>
			<div className="modal" style={modalStyle} onClick={toggleModal}></div>
			<div className="modal__content" style={modalStyle}>
				<div className="modal__nav">
					<Button classes="btn-red btn-icon" type="close" handleFunction={toggleModal} />
				</div>
				<div className="modal__img">
					<img src={url} alt={title} />
				</div>
				<GridInfo url={url} title={title} price={price} isInCart={isInCart} />
			</div>
		</>
	);
};

Modal.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
	isInCart: PropTypes.bool,
	showModal: PropTypes.bool,
	toggleModal: PropTypes.func
};
