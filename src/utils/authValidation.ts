const EMAIL_CHECK = new RegExp(
	"[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.][a-zA-Z]"
);
const PW_CHECK = new RegExp("(?=.{8,})");

export const emailValidation = (email: string): boolean => {
	return EMAIL_CHECK.test(email);
};

export const passwordValidation = (password: string): boolean => {
	return PW_CHECK.test(password);
};
