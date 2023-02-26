import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SingUpPage";
import TodoPage from "./pages/TodoPage";

function App() {
	const auth = useContext(AuthContext);

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Routes>
				<Route
					path="/"
					element={auth.authToken ? <TodoPage /> : <SignInPage />}
				/>
				<Route
					path="/signup"
					element={auth.authToken ? <TodoPage /> : <SignUpPage />}
				/>
				<Route path="/todo" element={<TodoPage />} />
			</Routes>
		</div>
	);
}

export default App;
