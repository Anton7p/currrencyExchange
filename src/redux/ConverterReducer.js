const SET_CONVERT_FROM = 'SET_CONVERT_FROM'
const SET_CONVERT_TO = 'SET_CONVERT_TO'

let initialState = {
	convertFrom: {},
	convertTo: {}
}

export const ConvertReducer = (state = initialState, action) => {
	switch (action.type) {
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

export function setConvertTo(object) {
	return {
		type: SET_CONVERT_TO,
		object
	}
}

