import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {useStyles} from "./StyleConverter";
import {ConverterCardTitle} from "./ConverterCardTitle";
import {ConverterCardInputGroup} from "./ConverterCardInputGroup";


export function ConverterCard(props) {
	const classes = useStyles();
	return (
		 <Paper className={classes.paper}>
			 <Grid container>
				 <Grid item xs={12} className={classes.title}>
					 <ConverterCardTitle {...props}/>
				 </Grid>
				 <Grid item xs={12} className={classes.container}>
					 <ConverterCardInputGroup {...props}/>
				 </Grid>
			 </Grid>
		 </Paper>
	);
}


