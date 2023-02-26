import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoType } from "../components/auth/types";
import AuthContext from "./AuthContext";
import { signInApi } from "../apis/auth/auth";
import { emailValidation, passwordValidation } from "../utils/AuthValidation";

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const [isDisabled, setIsDisabled] = useState(true);
	const [userInfo, setUserInfo] = useState<UserInfoType>({
		email: undefined,
		password: undefined,
	});

	useEffect(() => {
		emailValidation(userInfo.email) && passwordValidation(userInfo.password)
			? setIsDisabled(false)
			: setIsDisabled(true);
	}, [userInfo]);

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInfo({
			...userInfo,
			email: value,
		});
	};

	const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInfo({
			...userInfo,
			password: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await signInApi(userInfo).then((res) => {
				localStorage.setItem("access_token", res.data.access_token);
				navigate("/todo");
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				authToken: localStorage.getItem("access_token"),
				handleEmail,
				handlePw,
				handleSubmit,
				userInfo: {
					email: "",
					password: "",
				},
				isDisabled,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

// SignIn 안에 있는 로직을 여기서 처리하고, 함수, state 공유하기
