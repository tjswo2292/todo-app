import React from "react";

export interface User {
	authToken: string | null; // localStorage 값이 조회 안되는건 null임
	handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePw: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	userInfo: {
		email: string;
		password: string;
	};
	isDisabled: boolean | undefined;
}
