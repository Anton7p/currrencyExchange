import React from 'react';
import {Card, Input} from "@material-ui/core";
import classes from "./Converter.module.css";
import {SelectCurrency} from "../SelectCurrency/SelectCurrency";
import {useSelector} from "react-redux";

export function ConverterCurrencyCard(props) {
	// const data = useSelector()
	return (
		 <Card className={classes.currency_choice}>
			 <div className={classes.currency_choice__item}>
				 <div>
				 	 <span>
				 		{props.id === 'from' ? props.title.titleFrom : props.title.titleTo}
				 	 </span>
				 </div>
				 <div className={classes.item_input_group}>
					 <SelectCurrency {...props}/>
					 <Input className={classes.item_input_group__input}
							  id={props.id}
							  value={props.id === 'from' ? props.amount.amountFrom : props.amount.amountTo}
							  onChange={(e) => props.handleInputValue(e.target.value, props.id)}/>

				 </div>
			 </div>
		 </Card>
	);
}
