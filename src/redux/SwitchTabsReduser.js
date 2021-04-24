const SET_ACTUAL = 'SET_ACTUAL'

let initialState = {
	actual: 0,
}

export  const SwitchTabsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTUAL:
			return {...state, actual: action.mode};
		default: {
			return state;
		}
	}
};


export function setMode(mode) {
	return {
		type: SET_ACTUAL,
		mode
	}
}

