import React from 'react';
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import {useStyles} from "./StyleCurrencyExchange";


export function Header(props) {
	const classes = useStyles();

	return (
		 <Container className={classes.content}>
			 <AppBar position={"static"} className={classes.header}>
				 <Toolbar>
					 <Typography className={classes.title} >Currency Exchange</Typography>
				 </Toolbar>
			 </AppBar>
		 </Container>
	);
}
