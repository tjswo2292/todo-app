import { ReactNode, useState } from "react";
import AuthTokenContext from "./AuthTokenContext";

const AuthTokenProvider = ({ children }: { children: ReactNode }) => {
	const [token, setToken] = useState<string | null>(
		localStorage.getItem("access_token")
	);

	return (
		<AuthTokenContext.Provider value={token}>
			{children}
		</AuthTokenContext.Provider>
	);
};

export default AuthTokenProvider;
