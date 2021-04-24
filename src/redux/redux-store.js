import CurrencyReducer from "./CurrencyReducer.js";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {ConvertReducer} from "./ConverterReducer";
import SwitchTabsReducer from "./SwitchTabsReduser";


let reducers = combineReducers({
	Currencies: CurrencyReducer,
	Conversion: ConvertReducer,
	ActualTab: SwitchTabsReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
