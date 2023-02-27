import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShareInput from "../common/ShareInput";
import ShareTitle from "../common/ShareTitle";
import ShareButton from "../common/ShareButton";
import { UserInfoType } from "./types";
import { signUpApi } from "../../apis/auth/auth";
import AuthContext from "../../context/AuthContext";

const SignUp = () => {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();
	// const [userInfo, setUserInfo] = useState<UserInfoType>({
	// 	email: undefined,
	// 	password: undefined,
	// });

	// const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const value = e.target.value;
	// 	setUserInfo({
	// 		...userInfo,
	// 		email: value,
	// 	});
	// };

	// const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const value = e.target.value;
	// 	setUserInfo({
	// 		...userInfo,
	// 		password: value,
	// 	});
	// };

	// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();

	// 	try {
	// 		await signUpApi(userInfo).then(() => navigate("/"));
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<form onSubmit={auth.handleSubmit}>
			<ShareTitle title="SignUp" />
			<ShareInput
				type="text"
				placeholder="email을 입력해 주세요"
				handleOnChange={auth.handleEmail}
			/>
			<ShareInput
				type="password"
				placeholder="비밀번호를 입력해 주세요"
				handleOnChange={auth.handlePw}
			/>
			<ShareButton text="회원가입" />
		</form>
	);
};

export default SignUp;
