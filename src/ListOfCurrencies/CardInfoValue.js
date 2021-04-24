import React from 'react';
import {Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleListOfCurrencies";

export function CardInfoValue(props) {
	const classes = useStyles();
	return (
		 <Toolbar className={classes.container}>
			 <Typography disabled
							 variant='h6'
							 className={classes.currency}
			 >
				 {(props.Value).toFixed(2)}RUB
			 </Typography>
		 </Toolbar>
	);
}
