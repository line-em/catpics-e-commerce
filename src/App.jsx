import { Route, Routes } from "react-router-dom";
import { SiteContextProvider } from "./context/SiteContext";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Checkout } from "./pages/Checkout";

function App() {
	return (
		<SiteContextProvider>
			<Nav />
			<main>
				<Routes>
					<Route path="/catpics-e-commerce" element={<Home />}>
						<Route index element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
					</Route>
				</Routes>
			</main>
		</SiteContextProvider>
	);
}

export default App;
