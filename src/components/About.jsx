import { ArrowsClockwise } from "phosphor-react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export const About = () => {
	const { handleRefresh } = useContext(SiteContext);
	return (
		<main className="intro">
			<button className="circle" onClick={() => handleRefresh()}>
				<ArrowsClockwise weight="duotone" size={80} />
			</button>
			<div className="base-wrapper__style">
				<h1>
					Welcome to the purr-fect destination for cat lovers everywhere! 🐱
				</h1>
				<p>
					Here at our store, you'll find a wide variety of adorable and unique
					cat images that are sure to bring a smile to your face. With new
					images added every refresh, there's always something new and exciting
					to discover.{" "}
					<strong>Click the button to refresh your pics selection!</strong>
				</p>
				<p>
					Take a look around, and add your favorite images to your cart. We
					can't wait to help you bring some feline joy into your life! 😺
				</p>
				<small>
					<strong>Note:</strong> This is not a real store!
				</small>
			</div>
		</main>
	);
};
