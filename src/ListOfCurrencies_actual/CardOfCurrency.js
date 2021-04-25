import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {useStyles} from "./StyleListOfCurrencies";
import {CardTitle} from "./CardTitle";
import {CardIfo} from "./CardInfo";


export function CardOfCurrency(props) {
	const classes = useStyles();
	return (
		 <Paper className={classes.paper}>
			 <Grid container>
				 <Grid item xs={12}>
					 <CardTitle {...props}/>
				 </Grid>
				 <Grid item xs={12}>
					 <CardIfo {...props}/>
				 </Grid>
			 </Grid>
		 </Paper>
	);
}
