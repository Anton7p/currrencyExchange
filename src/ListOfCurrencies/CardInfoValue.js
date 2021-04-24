import React from 'react';
import {Button, Toolbar} from "@material-ui/core";
import {useStyles} from "./StyleListOfCurrencies";
import {setMode} from "../redux/SwitchTabsReduser";
import {useDispatch} from "react-redux";
import {setConvertTo} from "../redux/ConverterReducer";

export function CardInfoValue(props) {
	const dispatch = useDispatch()
	const classes = useStyles();

	const handleClick = () => {
		dispatch(setMode(1))
		dispatch(setConvertTo(props))
	};
	return (
		 <Toolbar className={classes.container}>
				 <Button className={classes.currency} onClick={handleClick}>
					 {(props.Value).toFixed(2)}RUB
				 </Button>
		 </Toolbar>
	);
}
