import { createContext } from "react";
import { User } from "./types";

const AuthContext = createContext<User>({
	authToken: null,
	handleEmail: () => {},
	handlePw: () => {},
	handleSubmit: () => {},
	userInfo: {
		email: "",
		password: "",
	},
	isDisabled: true,
});

export default AuthContext;
