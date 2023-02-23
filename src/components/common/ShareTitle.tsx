import { TitleInfo } from "./types";

const ShareTitle = ({ title }: TitleInfo) => {
	return (
		<div className="mb-3 text-center">
			<span>{title}</span>
		</div>
	);
};

export default ShareTitle;
