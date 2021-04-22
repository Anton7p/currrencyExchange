import React from 'react';
import {Grid, Paper, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import HeightIcon from "@material-ui/icons/Height";
import {makeStyles} from "@material-ui/core/styles";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
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
	green: {
		color: theme.palette.success.main
	},
	red: {
		color: theme.palette.secondary.main
	}
}));


export function CardOfCurrency(props) {
	const classes = useStyles();
	return (
		 <Paper className={classes.paper}>
			 <Grid container>
				 <Grid item xs={12} className={classes.title}>
					 <Toolbar>
						 <Typography disabled
										 className={classes.title}
										 variant='h6'>
							 {props.Name}
						 </Typography>
					 </Toolbar>
				 </Grid>
				 <Grid item xs={12} className={classes.container}>
					 <Toolbar>
						 <Grid container spacing={2}>
							 <Grid item xs={6} className={classes.selector}>
								 <Toolbar>
									 <Typography disabled
													 variant='h6'
									 >
										 {props.Nominal} {props.CharCode}
									 </Typography>
								 </Toolbar>
								 <Toolbar>
									 <HeightIcon className={classes.icon}/>
									 <Typography disabled
													 variant='h6'
									 >
										 {props.Value}RUB
									 </Typography>
								 </Toolbar>
							 </Grid>
							 <Grid item xs={6}>
								 <Toolbar>
									 <Typography disabled
													 variant='h6'
													 className={props.priceRise ? classes.green : classes.red}>
										 {props.priceRise ?
											  <ArrowUpwardIcon/> :
											  <ArrowDownwardIcon/>}
										 {props.diff}
									 </Typography>
								 </Toolbar>
							 </Grid>
						 </Grid>
					 </Toolbar>
				 </Grid>
			 </Grid>
		 </Paper>
	);
}

export default CardOfCurrency;