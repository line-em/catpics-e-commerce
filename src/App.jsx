import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { SiteContextProvider } from "./context/SiteContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
	return (
		<SiteContextProvider>
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={`/cart`} element={<Cart />} />
				</Routes>
			</main>
		</SiteContextProvider>
	);
}

export default App;
