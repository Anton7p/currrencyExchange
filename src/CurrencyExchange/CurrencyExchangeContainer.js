import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CurrencyAPI} from "../api/CurrencyApi";
import {setCurrencies} from "../redux/CurrencyReducer";
import {CurrencyExchange} from "./CurrencyExchange";


export function CurrencyExchangeContainer() {
	const currencies = useSelector(state => state.Currencies.currencies)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(async () => {
			let response = await CurrencyAPI.getCurrency()
			dispatch(setCurrencies(response))
		})
	},[dispatch]);


	return (
		 <CurrencyExchange currencies={currencies}/>
	);
}
