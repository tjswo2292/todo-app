import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoType } from "./types";
import ShareInput from "../common/ShareInput";
import ShareTitle from "../common/ShareTitle";
import ShareButton from "../common/ShareButton";
import { signInApi } from "../../apis/auth/auth";

const SignIn = () => {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState<UserInfoType>({
		email: undefined,
		password: undefined,
	});

	const handleLink = () => {
		navigate("/signup");
	};

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
			await signInApi(userInfo).then((res) =>
				localStorage.setItem("access_token", res.data.access_token)
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<form className="h-auto" onSubmit={handleSubmit}>
				<ShareTitle title="SignIn" />
				<ShareInput
					type="text"
					placeholder="email을 입력해 주세요"
					handleOnChange={handleEmail}
				/>
				<ShareInput
					type="password"
					placeholder="비밀번호를 입력해 주세요"
					handleOnChange={handlePw}
				/>
				<ShareButton text="로그인" />
			</form>
			<ShareButton handleNavi={handleLink} text="회원가입" />
		</div>
	);
};

export default SignIn;
