import React from 'react';
import {Grid, Input, Toolbar} from "@material-ui/core";
import {SelectCurrency} from "../SelectCurrency/SelectCurrency";
import {parseNumber} from "../lib/parse";
import {useStyles} from "./StyleConverter";

export function ConverterCardInputGroup(props) {
	const classes = useStyles();
	return (
		 <Toolbar>
			 <Grid container spacing={2}>
				 <Grid item xs={6} className={classes.selector}>
					 <SelectCurrency {...props}/>
				 </Grid>
				 <Grid item xs={6}>
					 <Input className={classes.input}
							  id={props.id}
							  value={props.id === 'from' ? props.amountFrom : props.amountTo}
							  onChange={(e) => props.handleInputValue(parseNumber(e.target.value), props.id)}
					 />
				 </Grid>
			 </Grid>
		 </Toolbar>
	);
}
