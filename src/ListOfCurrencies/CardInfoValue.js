import React from 'react';
import { Toolbar} from "@material-ui/core";
import {useStyles} from "./StyleListOfCurrencies";
import {setMode} from "../redux/SwitchTabsReduser";
import {useDispatch} from "react-redux";
import {setConvertTo} from "../redux/ConverterReducer";
import Typography from "@material-ui/core/Typography";

export function CardInfoValue(props) {
	const dispatch = useDispatch()
	const classes = useStyles();

	const handleClick = () => {
		dispatch(setMode(1))
		dispatch(setConvertTo(props))
	};
	return (
		 <Toolbar className={classes.container}>
			 <Typography
				  className={classes.currency}
				  onClick={handleClick}>
				 {(props.Value).toFixed(2)}RUB
			 </Typography>
		 </Toolbar>
	);
}
