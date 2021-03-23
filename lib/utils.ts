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

/**
 * Converts from Sanity image ref (e.g. `image-G3i4emG6B8JnTmGoN0UjgAp8-300x450-jpg`) to correct URL
 * (e.g. https://cdn.sanity.io/images/6bp6zlw9/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg)
 */
export function sanityImageRefToUrl(ref: string) {
	const [, id, dimensions, format] = ref.split("-");
	return `https://cdn.sanity.io/images/6bp6zlw9/production/${id}-${dimensions}.${format}`;
}
