// import { useContext } from "react";
// import { SiteContext } from "../context/SiteContext";
import { Button } from "./Button";
import { GridInfo } from "./GridInfo";

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
