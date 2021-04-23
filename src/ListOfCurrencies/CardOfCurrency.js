import React from 'react';
import {Grid, Paper, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: '5px blue',
		justifyContent: 'space-around',
		display: 'flex',
		flexWrap: 'nowrap'
	},
	paper: {
		borderRadius: theme.spacing(2),
		margin: theme.spacing(1)
	},
	title: {
		marginTop: theme.spacing(1),
		fontSize: theme.spacing(3),
	},
	green: {
		color: theme.palette.success.main,
		fontSize: theme.spacing(5),

	},
	red: {
		color: theme.palette.secondary.main,
		fontSize: theme.spacing(5),
	},
	container: {
		justifyContent: 'flex-end',
		fontSize: theme.spacing(5),
		'& .MuiSvgIcon-root': {
			fontSize: theme.spacing(4),
			marginBottom: theme.spacing(0.5),
		}
	},
	currency: {
		fontSize: theme.spacing(5),
	},
	icon: {
		transform: 'rotate(90deg)',
		color: theme.palette.info.light,
		height: theme.spacing(8),
		fontSize: theme.spacing(10),
		fontWeight: 'normal',
	}
}));


export function CardOfCurrency(props) {
	const classes = useStyles();
	return (
		 <Paper className={classes.paper}>
			 <Grid container>
				 <Grid item xs={12}>
					 <Toolbar>
						 <Typography disabled
										 className={classes.title}
										 variant='h6'>
							 {props.Name}
						 </Typography>
					 </Toolbar>
				 </Grid>
				 <Grid item xs={12}>
					 <Grid container spacing={3}>
						 <Grid item xs={8}>
							 <Grid container className={classes.root}>
								 <Grid item>
									 <Box className={classes.root}>
										 <Toolbar>
											 <Typography disabled
															 variant='h6'
															 className={classes.currency}
											 >
												 {props.Nominal}{props.CharCode}
											 </Typography>
										 </Toolbar>
									 </Box>
								 </Grid>
								 <Grid item>
									 <img src="/image/arrow.png" alt=""/>
								 </Grid>
								 <Grid item>
									 <Grid container className={classes.container}>
										 <Grid item>
											 <Toolbar>
												 <Typography disabled
																 variant='h6'
																 className={classes.currency}
												 >
													 {(props.Value).toFixed(2)}RUB
												 </Typography>
											 </Toolbar>
										 </Grid>
									 </Grid>
								 </Grid>
							 </Grid>
						 </Grid>
						 <Grid item xs={4}>
							 <Grid container className={classes.container}>
								 <Grid item>
									 <Toolbar>
										 <Typography variant='h6'
														 className={props.priceRise ? classes.green : classes.red}>
											 {props.priceRise ?
												  <ArrowUpwardIcon/> :
												  <ArrowDownwardIcon/>}
											 {props.diff}
										 </Typography>
									 </Toolbar>
								 </Grid>
							 </Grid>
						 </Grid>
					 </Grid>
				 </Grid>
			 </Grid>
		 </Paper>
	);
}
