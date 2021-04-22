import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


export function SelectCurrency(props) {

	const [currency, setCurrency] = React.useState('EUR');
	const [currencies, setCurrencies] = React.useState();

	const handleChange = (event) => {
		setCurrency(event.target.value);
	}

	useEffect(() => {
		setCurrencies(props.currencies)
	}, [props]);

	return (
		 <>
			 <form noValidate autoComplete="off">
				 <div>
					 <TextField
						  id="standard-select-currency"
						  select
						  value={currency}
						  onChange={handleChange}
					 >
						 {currencies ? currencies.map((option) => (
							  <MenuItem key={option.CharCode} value={option.CharCode}>
								  {option.CharCode}
							  </MenuItem>
						 )) : null}
					 </TextField>
				 </div>
			 </form>
		 </>
	)
		 ;
}
