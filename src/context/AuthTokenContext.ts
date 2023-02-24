import { createContext } from "react";

const AuthTokenContext = createContext<string | null>(null);

export default AuthTokenContext;
