import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


export function SelectCurrency(props) {

	return (
			 <form noValidate autoComplete="off">
				 <div>
					 <TextField
						  id={props.id}
						  select
						  value={props.id === 'from' ? props.value.valueFrom :props.value.valueTo }
						  onChange={(e) => props.handleSelectValue(e.target.value, props.id)}
					 >
						 {props.currencies ? props.currencies.map((option) => (
							  <MenuItem key={option.CharCode} value={option.CharCode}>
								  {option.CharCode}
							  </MenuItem>
						 )) : null}
					 </TextField>
				 </div>
			 </form>
	)
		 ;
}
