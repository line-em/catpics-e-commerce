import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { Modal } from "./Modal";

export const Grid = ({ catPics }) => {
	const { url, title, price, width, height } = catPics;
	const [showModal, toggleModal] = useToggle(false);

	return (
		<>
			<div className={` grid_container__item`}>
				<div className="grid_container__img" onClick={() => toggleModal()}>
					<img src={url} alt={title} />
				</div>
				<div className="grid_container__info">
					<p className="grid_container__price">$ {price}</p>
					<Button classes="btn-icon" type="addCart" onClick={console.log("To cart...")} />
				</div>
				<Modal
					url={url}
					title={title}
					price={price}
					showModal={showModal}
					toggleModal={toggleModal}
				/>
			</div>
		</>
	);
};

// ${getClass(width)}
