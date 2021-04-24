const SET_CONVERT_FROM = 'SET_CONVERT_FROM'
const SET_CONVERT_TO = 'SET_CONVERT_TO'
const SET_CONVERT = 'SET_CONVERT'


let initialState = {
	convert: [],
	baseCurrency: {
		CharCode: "RUB",
		ID: "1",
		Name: "Российский Рубль",
		Nominal: 1,
		NumCode: "1",
		Previous: 1,
		Value: 1,
		diff: 0
	},
	convertFrom: {},
	convertTo: null,
}

export const ConvertReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONVERT:
			const array = JSON.parse(JSON.stringify(action.array))
			array.push(state.baseCurrency)
			return {
				...state, ...state.convert, ...state.convertFrom, ...state.convertTo,
				convertFrom:  state.baseCurrency,
				convert: array,
				convertTo: state.convertTo || array[0]
			};
		case SET_CONVERT_FROM:
			return {...state, ...state.convertFrom, convertFrom: action.object};
		case SET_CONVERT_TO:
			return {...state, ...state.convertFrom, convertTo: action.object};
		default: {
			return state;
		}
	}
};


export function setConvertFrom(object) {
	return {
		type: SET_CONVERT_FROM,
		object
	}
}

export function setConvert(array) {
	return {
		type: SET_CONVERT,
		array
	}
}

export function setConvertTo(object) {
	return {
		type: SET_CONVERT_TO,
		object
	}
}
