import React from "react";
import { FormInput } from "./types";

const ShareInput = ({ type, placeholder, handleOnChange }: FormInput) => {
	return (
		<div className="mb-3">
			<input
				className="block rounded-xl p-2"
				type={type}
				placeholder={placeholder}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
			/>
		</div>
	);
};

export default ShareInput;
