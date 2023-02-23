import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SingUpPage";
import AuthTokenProvider from "./context/AuthTokenProvider";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<AuthTokenProvider>
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</AuthTokenProvider>
		</div>
	);
}

export default App;
