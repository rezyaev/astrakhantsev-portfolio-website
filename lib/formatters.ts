/**
 * Turns "+79992897951" into "+7 999 829-79-51"
 */
export function formatPhoneNumber(phoneNumber: string) {
	const phoneNumberArray = phoneNumber.split("");

	// insert spaces
	phoneNumberArray.splice(2, 0, " ");
	phoneNumberArray.splice(6, 0, " ");

	// insert dashes
	phoneNumberArray.splice(10, 0, "-");
	phoneNumberArray.splice(13, 0, "-");

	return phoneNumberArray.join("");
}
