import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import classes from "./Converter.module.css";
import {ConverterCurrencyCard} from "./ConverterCurrencyCard";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "lightgray",
	},
	MuiTab: {
		color: "white"
	}

}));

function Converter(props) {
	const classes = useStyles();
	return (
		 <Container maxWidth="md" className={classes.root}>
			 <Grid container md={12} flexGrow={1}>
				 <Grid item flexGrow={1}>
					 <ConverterCurrencyCard {...props} id={'from'}/>
				 </Grid>

					 <Button onClick={props.onClick}>
						 <img src="/image/arrow_horizontal.png" alt=""/>
					 </Button>

				 <Grid item >
					 <ConverterCurrencyCard {...props} id={'to'}/>
				 </Grid>
			 </Grid>
		 </Container>
	);
}

export default Converter;







