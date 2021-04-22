import React, {useState} from 'react';
import {ListOfCurrencies} from "./ListOfCurrencies";

export function ListOfCurrenciesContainer(props) {
	const {currencies} = props
	const [state, setState] = useState();

	function inputHandler(element) {
		if (element.charCodeAt() > 61 && element.charCodeAt() < 122) {
			setState(currencies.filter(el => el.CharCode.toLowerCase().indexOf(element.toLowerCase()) !== -1))
		} else
			setState(currencies.filter(el => el.Name.toLowerCase().indexOf(element.toLowerCase()) !== -1))
	}


	return (
		 <ListOfCurrencies currencies={state ? state : currencies} onChange={inputHandler}/>
	);
}
