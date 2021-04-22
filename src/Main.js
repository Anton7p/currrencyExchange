import React from 'react';
import {AppBar, Container, Paper, TextField, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {ConverterContainer} from "./Converter/ConverterContainer";
import {ListOfCurrenciesContainer} from "./ListOfCurrencies/ListOfCurrenciesContainer";
import {SwitchPanel} from "./SwitchTab/SwichPanel";


const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		backgroundColor: theme.palette.info.light,
	},
	content: {
		backgroundColor: theme.palette.info.light,
		position: 'sticky',
		padding: 0,
		top: 0,
		zIndex: 1000
	},
	tab: {
		marginTop: theme.spacing(1),
	},
	input: {
		marginTop: theme.spacing(6),
		position: 'sticky',
		top: theme.spacing(13),
		autoComplete: 'off',

	},
	button: {
		marginTop: theme.spacing(2),
		position: 'sticky',
		top: theme.spacing(7),
		zIndex: 999,
	}
}));

export function Main(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};


	return (
		 <Container className={classes.root}>
			 <Container className={classes.content}>
				 <AppBar position={"static"}>
					 <Toolbar>
						 <Typography className={classes.title} variant='h3'>Currency Exchange</Typography>
					 </Toolbar>
				 </AppBar>
			 </Container>
			 <Container className={classes.button} maxWidth={'md'}>
				 <Paper>
					 <Tabs value={value} onChange={handleChange} aria-label="simple tabs Currency"
							 fullWidth={true}
							 textColor="secondary">
						 <Tab label="Список валют"/>
						 <Tab label="Конвертер валют"/>
					 </Tabs>
				 </Paper>
			 </Container>{
			 value === 1 ?
				  <Container className={classes.input} maxWidth={'md'}>
					  <Paper>
						  <TextField id="filled-search"
										 fullWidth={true}
										 label="Валюта"
										 type="search"
										 variant="filled"
										 avtocomplite='off'

								// onChange={(e) => props.onChange(e.target.value)}
						  />
					  </Paper>
				  </Container> : null}
			 <Container className={classes.tab}>
				 <SwitchPanel value={value} index={0}>
					 <ConverterContainer {...props}/>
				 </SwitchPanel>
				 <SwitchPanel value={value} index={1}>
					 <ListOfCurrenciesContainer {...props}/>
				 </SwitchPanel>
			 </Container>
		 </Container>
	);
}


export default Main;