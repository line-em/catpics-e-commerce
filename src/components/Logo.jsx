import { Link } from "react-router-dom";
import { Cat } from "phosphor-react";

const Logo = () => {
	return (
		<Link to="/">
			<h2 className="logo">
				<Cat weight="duotone" size={40} />
				Cat Pics
			</h2>
		</Link>
	);
};

export default Logo;
