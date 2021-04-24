const SET_AMOUNT_TO = 'SET_AMOUNT_TO'
const SET_AMOUNT_FROM = 'SET_AMOUNT_FROM'

let initialState = {
	amountFrom: '',
	amountTo: '',
}

export const AmountReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AMOUNT_FROM:
			return {...state, ...state.amountFrom, amountFrom: action.amount};
		case SET_AMOUNT_TO:
			return {...state, ...state.amountTo, amountTo: action.amount};
		default: {
			return state;
		}
	}
};


export function setAmountTo(amount) {
	return {
		type: SET_AMOUNT_TO,
		amount
	}
}

export function setAmountFrom(amount) {
	return {
		type: SET_AMOUNT_FROM,
		amount
	}
}