const EMAIL_CHECK = new RegExp("@");
const PW_CHECK = new RegExp("(?=.{8,})");

export const emailValidation = (email: string | undefined): boolean | void => {
	if (email === undefined) return;
	return EMAIL_CHECK.test(email);
};

export const passwordValidation = (
	password: string | undefined
): boolean | void => {
	if (password === undefined) return;
	return PW_CHECK.test(password);
};
