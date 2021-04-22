import React from 'react';
import {Container, Paper, TextField} from "@material-ui/core";
import classes from "./ListOfCurrencies.module.css";
import CardOfCurrency from "./CardOfCurrency";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";

const useStyles = makeStyles((theme) => ({
			  input: {
				  top: theme.spacing(20),
				  position: 'fixed',
				  flexGrow: '50%',
				  '& .MuiTextField-root': {
					  witch:'100%'

				  },
			  },
		  }
	 ))
;


export function ListOfCurrencies(props) {
	const classes = useStyles();
	return (
		 <>
			 {/*<Container maxWidth="md" className={'input_group__container'}>*/}
				{/*	 <Paper className={classes.input}>*/}
				{/*		 <TextField id="filled-search"*/}
				{/*						maxWidth={'ls'}*/}
				{/*						rowsMax={5}*/}
				{/*						label="Валюта"*/}
				{/*						type="search"*/}
				{/*						variant="filled"*/}
				{/*						onChange={(e) => props.onChange(e.target.value)}/>*/}
				{/*	 </Paper>*/}
			 {/*</Container>*/}
			 {props.currencies.map(el => {
				 return <CardOfCurrency {...el}/>
			 })}
		 </>
	);
}
