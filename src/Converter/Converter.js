import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import {ConverterCurrencyCard} from "./ConverterCurrencyCard";
import {makeStyles} from "@material-ui/core/styles";
import HeightIcon from '@material-ui/icons/Height';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		marginTop: theme.spacing(10),
		top: theme.spacing(18),
		backgroundColor: theme.palette.info.light,
		minHeight: theme.spacing(25),
		direction: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: theme.spacing(2)
	},
	grid: {
		display: "flex",
		margin: '0 auto',
		justifyContent: 'center',
		alignItems: 'center',

	},
	button: {

		height: theme.spacing(8),
		width: theme.spacing(8),
		borderRadius: '50%'
	},
	icon: {
		transform: 'rotate(90deg)',
		color: theme.palette.info.light,
		height: theme.spacing(8),
		fontSize: theme.spacing(6),
	}

}));

export function Converter(props) {
	const classes = useStyles();
	return (
		 <Container maxWidth="md" className={classes.root}>
			 <Grid container>
				 <Grid item sm={5} className={classes.paper}>
					 <ConverterCurrencyCard {...props} id={'from'}/>
				 </Grid>
				 <Grid item sm={2} className={classes.grid}>
					 <Button onClick={props.onClick}
								variant="contained"
								className={classes.button}>
						 <HeightIcon className={classes.icon}/>
					 </Button>
				 </Grid>
				 <Grid item sm={5}>
					 <ConverterCurrencyCard {...props} id={'to'}/>
				 </Grid>
			 </Grid>
		 </Container>
	);
}







