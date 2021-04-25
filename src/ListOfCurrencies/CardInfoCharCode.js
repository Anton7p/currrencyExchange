import React from 'react';
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleListOfCurrencies";

export function CardInfoCharCode(props) {
	const classes = useStyles();
	return (
		 <Typography className={classes.currency}>
			 {props.Nominal}{props.CharCode}
		 </Typography>
	);
}
