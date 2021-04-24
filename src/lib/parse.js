export function parseNumber(text) {
	if ('' === text) return '';
	let value = Number.parseInt(text);
	if (Number.isNaN(value)) {
		return '';
	}
	return value;
}

export function parseString(text) {
	if ('' === text) return '';
	return text.replace(/[\d]/g, '');
}
