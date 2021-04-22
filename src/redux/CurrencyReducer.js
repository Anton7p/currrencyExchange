const SET_CURRENCIES = 'SET_CURRENCIES'

let initialState = {
	currencies: [],
}

const CurrencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENCIES:
			const resultCurrencies = JSON.parse(JSON.stringify(action.currencies))
			const currencies = Object.values(resultCurrencies)
			currencies.map(el => {
				el.diff = Number((el.Value - el.Previous).toFixed(4));
				if (el.diff > 0) el.priceRise = true;
				return el
			})
			return {...state, currencies: currencies};
		default: {
			return state;
		}
	}
};

export default CurrencyReducer;

export function setCurrencies(currencies) {
	return {
		type: SET_CURRENCIES,
		currencies
	}
}

