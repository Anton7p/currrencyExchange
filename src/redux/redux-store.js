import CurrencyReducer from "./CurrencyReducer.js";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {ConvertReducer} from "./ConverterReducer";
import {SwitchTabsReducer} from "./SwitchTabsReduser";
import {AmountReducer} from "./AmountReduser";


let reducers = combineReducers({
	Currencies: CurrencyReducer,
	Conversion: ConvertReducer,
	ActualTab: SwitchTabsReducer,
	Amount: AmountReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
