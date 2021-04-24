import React from 'react';
import {Grid, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleListOfCurrencies";

export function CardTitle(props) {
	const classes = useStyles();
	return (
		 <Toolbar>
			 <Typography disabled
							 className={classes.title}
							 variant='h6'>
				 {props.Name}
			 </Typography>
		 </Toolbar>
	);
}
