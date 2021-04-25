import React from 'react';
import {Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleListOfCurrencies";

export function CardInfoCharCode(props) {
	const classes = useStyles();
	return (
			 <Toolbar className={classes.toolbar}>
				 <Typography className={classes.currency}>
					 {props.Nominal}{props.CharCode}
				 </Typography>
			 </Toolbar>
	);
}
