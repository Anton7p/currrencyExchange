import React from 'react';
import Box from "@material-ui/core/Box";
import { Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleListOfCurrencies";

export function CardInfoCharCode(props) {
	const classes = useStyles();
	return (
			 <Toolbar>
				 <Typography disabled
								 variant='h6'
								 className={classes.currency}
				 >
					 {props.Nominal}{props.CharCode}
				 </Typography>
			 </Toolbar>
	);
}
