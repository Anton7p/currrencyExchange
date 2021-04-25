import React, {useEffect} from 'react';
import {Container, Paper, TextField} from "@material-ui/core";
import {parseString} from "../lib/parse";
import {filterCurrentCurrency} from "../lib/filterCurrentCurrency";
import {useStyles} from "./StyleCurrencyExchange";
import {useSelector} from "react-redux";


export function InputWithSearch({setState}) {
	const currencies = useSelector(state => state.Currencies.currencies)
	const classes = useStyles();
	const [inputValue, setInputValue] = React.useState('');

	useEffect(() => {
		if (inputValue.charCodeAt() > 61 && inputValue.charCodeAt() < 122) {
			setState(filterCurrentCurrency(currencies, inputValue, 'CharCode'))
		} else setState(filterCurrentCurrency(currencies, inputValue, 'Name'))

	}, [inputValue]);

	return (
		 <Container className={classes.input}>
			 <Paper>
				 <TextField id="filled-search"
								fullWidth={true}
								label="Поиск валюты"
								type="search"
								variant="filled"
								avtocomplite='off'
								value={inputValue}
								onChange={(e) => setInputValue(parseString(e.target.value))}
				 />
			 </Paper>
		 </Container>
	);
}
