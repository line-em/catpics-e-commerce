// import { useContext } from "react";
// import { SiteContext } from "../context/SiteContext";
import { Button } from "./Button";

export const Modal = ({ url, title, price, showModal, toggleModal }) => {
	// const [showModal, toggleModal] = useContext(SiteContext);

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
				<h4>{title}</h4>
				<p className="grid_container__price">$ {price}</p>
				<Button
					classes="btn-icon"
					type="addCart"
					onClick={() => console.log("To cart...")}
				/>
			</div>
		</>
	);
};
