import { createContext } from "react";
import { AuthTokenType } from "./types";

const AuthTokenContext = createContext<AuthTokenType | null>({
	access_token: null,
});

export default AuthTokenContext;
