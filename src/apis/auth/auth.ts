import { client } from "./client";
import { UserInfoType } from "../../components/auth/types";

export const signInApi = async ({ email, password }: UserInfoType) => {
	return await client.post("/auth/signIn", { email, password });
};

export const signUpApi = async ({ email, password }: UserInfoType) => {
	return await client.post("/auth/signup", { email, password });
};
