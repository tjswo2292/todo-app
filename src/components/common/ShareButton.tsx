import { FormButton } from "./types";

const ShareButton = ({ text, handleNavi }: FormButton) => {
	return <button onClick={handleNavi}>{text}</button>;
};

export default ShareButton;
