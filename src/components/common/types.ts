export interface TitleInfo {
	title: string;
}
export interface FormInput {
	type: string;
	placeholder: string;
	handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface FormButton {
	text: string;
}
