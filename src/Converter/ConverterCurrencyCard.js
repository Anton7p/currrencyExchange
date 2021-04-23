import React from 'react';
import {Grid, Input, Paper, Toolbar} from "@material-ui/core";
import {SelectCurrency} from "../SelectCurrency/SelectCurrency";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: theme.spacing(2)
	},
	title: {
		marginTop: theme.spacing(1),
		fontSize: theme.spacing(3),
	},
	input: {
		fontSize: theme.spacing(4),
		textOverflow: 'clip',
		'& .MuiInputBase-input': {
			padding: 0,
		},
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInputBase-root:hover': {
			border: 'none',
		},
		'& .MuiInput-underline:hover': {
			border: 'none',
		},
		'& .MuiInput-underline:after': {
			border: 'none'
		}
	},
	container: {
		marginBottom: theme.spacing(1),
	},
	selector: {
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
}));


export function ConverterCurrencyCard(props) {
	const classes = useStyles();
	return (
		 <Paper className={classes.paper}>
			 <Grid container>
				 <Grid item xs={12} className={classes.title}>
					 <Toolbar>
						 <Typography disabled
										 className={classes.title}
										 variant='h6'>
							 {props.id === 'from' ? props.title.titleFrom : props.title.titleTo}
						 </Typography>
					 </Toolbar>
				 </Grid>
				 <Grid item xs={12} className={classes.container}>
					 <Toolbar>
						 <Grid container spacing={2}>
							 <Grid item xs={6} className={classes.selector}>
								 <SelectCurrency {...props} />
							 </Grid>
							 <Grid item xs={6}>
								 <Input className={classes.input}
										  id={props.id}
										defaultValue={props.id === 'from' ? props.amount.amountFrom : props.amount.amountTo}
										  onChange={(e) => props.handleInputValue(e.target.value, props.id)}
								 />
							 </Grid>
						 </Grid>
					 </Toolbar>
				 </Grid>
			 </Grid>
		 </Paper>
	);
}


//
// <div className={classes.currency_choice__item}>
// 	<div>
// 				 	 <span>
// 				 		{props.id === 'from' ? props.title.titleFrom : props.title.titleTo}
// 				 	 </span>
// 	</div>
// 	<div className={classes.item_input_group}>
// 		<SelectCurrency {...props}/>
// <Input className={classes.input}
// 		 id={props.id}
// 		 value={props.id === 'from' ? props.amount.amountFrom : props.amount.amountTo}
// 		 onChange={(e) => props.handleInputValue(e.target.value, props.id)}/>
//
// 	</div>
// </div>