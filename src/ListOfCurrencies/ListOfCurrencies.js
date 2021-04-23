import React from 'react';
import {CardOfCurrency} from "./CardOfCurrency";


export function ListOfCurrencies(props) {
	return (
		 props.currencies.map((el,idx) => {
			 return <CardOfCurrency  key={idx}{...el}/>
		 })
	);
}
