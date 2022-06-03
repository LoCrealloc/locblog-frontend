import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<p>Hello, World</p>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
