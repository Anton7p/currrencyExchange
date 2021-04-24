import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from "./StyleSelecCurrency";


export function SelectCurrency(props) {
	const classes = useStyles();
	return (
		 <TextField
			  className={classes.root}
			  select
			  value={props.id === 'from' ? props.value.valueFrom : props.value.valueTo}
			  onChange={(e) => props.handleSelectValue(e.target.value, props.id)}
		 >
			 {props.currencies ? props.currencies.map((option) => (
				  <MenuItem key={option.CharCode} value={option.CharCode}>
					  {option.CharCode}
				  </MenuItem>
			 )) : null}
		 </TextField>
	);
}
