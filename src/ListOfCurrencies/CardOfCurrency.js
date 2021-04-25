import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {useStyles} from "./StyleListOfCurrencies";
import {CardTitle} from "./CardTitle";
import {CardInfo} from "./CardInfo";


export function CardOfCurrency(props) {
	const classes = useStyles();
	return (
		 <Paper className={classes.root}>
			 <Grid container>
				 <Grid item xs={12} className={classes.title} >
					 <CardTitle {...props}/>
				 </Grid>
				 <Grid item xs={12} className={classes.content}>
					 {/* eslint-disable-next-line react/jsx-no-undef */}
					 <CardInfo {...props}/>

				 </Grid>
			 </Grid>
		 </Paper>
	);
}
