export function filterCurrentCurrency(array, text, property) {
	return array.filter(el => el[property]
		 .toLowerCase()
		 .indexOf(text.toLowerCase()) !== -1)
}