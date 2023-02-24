import { FormButton } from "./types";

const ShareButton = ({ text, isDisabled, handleNavi }: FormButton) => {
	return (
		<button disabled={isDisabled} onClick={handleNavi}>
			{text}
		</button>
	);
};

export default ShareButton;
