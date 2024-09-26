import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books/Books.jsx";
import Add from "./pages/Add/Add.jsx";
import Update from "./pages/Update/Update.jsx";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Books />} />
			<Route path='/add' element={<Add />} />
			<Route path='/update/:id' element={<Update />} />
		</Routes>
	);
}

export default App;
