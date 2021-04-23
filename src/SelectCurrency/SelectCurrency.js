import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: '75%',
		borderBottom: 'none',
		'& .MuiSelect-root': {
			fontSize: theme.spacing(4),
		},
		'& .MuiSelect-selectMenu': {
			minHeight: 0
		},
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInputBase-root:hover': {
			border: 'none',
		},
		'& .MuiInput-underline:hover:before': {
			border: 'none',
		},
		'& .MuiInput-underline:after': {
			border: 'none'
		}
	},
}));


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
