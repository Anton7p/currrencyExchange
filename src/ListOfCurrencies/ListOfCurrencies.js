import React from 'react';
import {Container, TextField} from "@material-ui/core";
import classes from "./ListOfCurrencies.module.css";
import CardOfCurrency from "./CardOfCurrency";


export function ListOfCurrencies(props) {

	return (
		 <>
			 <Container maxWidth="md" className={'input_group__container'}>
				 <TextField id="filled-search"
								label="Валюта"
								type="search"
								variant="filled"
								onChange={(e) => props.onChange(e.target.value)}
								className={classes.input_group}/>
			 </Container>
			 {props.currencies.map(el => {
				 return <CardOfCurrency {...el}/>
			 })}
		 </>
	);
}
