import { ReactNode } from "react";
import AuthTokenContext from "./AuthTokenContetxt";

const AuthTokenProvider = ({ children }: { children: ReactNode }) => {
	return (
		<AuthTokenContext.Provider value={{ access_token: null }}>
			{children}
		</AuthTokenContext.Provider>
	);
};

export default AuthTokenProvider;
