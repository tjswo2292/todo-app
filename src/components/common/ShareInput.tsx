import React from "react";
import { FormInput } from "./types";

const ShareInput = ({ type, placeholder, handleOnChange }: FormInput) => {
	return (
		<div>
			<input
				className="block rounded-2xl"
				type={type}
				placeholder={placeholder}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
			/>
		</div>
	);
};

export default ShareInput;
