import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ShareInput from "../common/ShareInput";
import ShareTitle from "../common/ShareTitle";
import ShareButton from "../common/ShareButton";

const SignIn = () => {
	const navigate = useNavigate();
	const auth = useContext(AuthContext);

	const handleLink = () => {
		navigate("/signup");
	};

	return (
		<div>
			<form className="h-auto" onSubmit={auth.handleSubmit}>
				<ShareTitle title="SignIn" />
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
				<ShareButton isDisabled={auth.isDisabled} text="로그인" />
			</form>
			<ShareButton handleNavi={handleLink} text="회원가입" />
		</div>
	);
};

export default SignIn;
