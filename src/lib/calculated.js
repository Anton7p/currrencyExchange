

export function calculated(from, to, amount) {
	if (amount === '') return '';
	return ((from.Value / from.Nominal)/(to.Value / to.Nominal)  * amount).toFixed(2)
}
