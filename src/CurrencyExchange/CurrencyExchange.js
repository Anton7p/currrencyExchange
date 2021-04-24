import React, {useState} from 'react';
import {AppBar, Container, Paper, TextField, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {ConverterContainer} from "../Converter/ConverterContainer";
import {ListOfCurrenciesContainer} from "../ListOfCurrencies/ListOfCurrenciesContainer";
import {SwitchPanel} from "../SwitchPanel/SwichPanel";
import {ListOfCurrencies} from "../ListOfCurrencies/ListOfCurrencies";
import {useDispatch, useSelector} from "react-redux";
import {setMode} from "../redux/SwitchTabsReduser";


const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		padding: 0,
	},
	root1: {
		position: "relative",
		backgroundColor: theme.palette.info.light,
		padding: 0,
	},
	content: {
		backgroundColor: theme.palette.info.light,
		position: 'sticky',
		padding: 0,
		top: 0,
		zIndex: 1000
	},
	header: {
		minHeight: theme.spacing(14),
		display: 'flex',
		justifyContent: 'center'

	},
	paper: {
		borderRadius: '0',
		'& .MuiTab-root': {
			color: theme.palette.info.light,
			fontSize: theme.spacing(3),
			width: '50%',
			maxWidth: 'none'
		},
		'& .MuiTabs-indicator': {
			backgroundColor: theme.palette.primary.main
		}
	},
	input: {
		marginTop: theme.spacing(6),
		position: 'sticky',
		top: theme.spacing(22),
		autoComplete: 'off',
		zIndex: 999,
		'& .MuiInputBase-root': {
			fontSize: theme.spacing(5),
			minHeight: theme.spacing(10)
		}
	},
	button: {

		marginTop: theme.spacing(2),
		position: 'sticky',
		top: theme.spacing(7),
		zIndex: 999,
	},
	title: {
		fontSize: theme.spacing(7),
	},
	tabs: {
		width: '100%'
	},
	footer: {
		maxHeight: theme.spacing(4),
		position: 'absolute',
		left: 0,
		bottom: 0,
		backgroundColor: theme.palette.info.light,
	},
	text: {
		fontSize: theme.spacing(2),
	},
}));

export function CurrencyExchange(props) {
	const dispatch = useDispatch()
	const classes = useStyles();

	const value = useSelector(state => state.ActualTab.actual)
	const handleChange = (event, newValue) => {
		dispatch(setMode(newValue))
	};

	const {currencies} = props
	const [state, setState] = useState();

	function onChange(element) {
		if (element.charCodeAt() > 61 && element.charCodeAt() < 122) {
			setState(currencies.filter(el => el.CharCode.toLowerCase().indexOf(element.toLowerCase()) !== -1))
		} else
			setState(currencies.filter(el => el.Name.toLowerCase().indexOf(element.toLowerCase()) !== -1))
	}


	return (
		 <Container className={value === 1 ? classes.root1 : classes.root} maxWidth={'lg'}>
			 <Container className={classes.content}>
				 <AppBar position={"static"} className={classes.header}>
					 <Toolbar>
						 <Typography className={classes.title} variant='h3'>Currency Exchange</Typography>
					 </Toolbar>
				 </AppBar>
				 <Paper className={classes.paper}>
					 <Tabs value={value} onChange={handleChange}
							 className={classes.tabs}
							 textColor="secondary">
						 <Tab label="Список валют"/>
						 <Tab label="Конвертер валют"/>
					 </Tabs>
				 </Paper>
			 </Container>
			 <Container className={classes.root} maxWidth={'md'}>
				 {value === 1 ?
						  <Container className={classes.input}>
							  <Paper>
								  <TextField id="filled-search"
												 fullWidth={true}
												 label="Валюта"
												 type="search"
												 variant="filled"
												 avtocomplite='off'
												 onChange={(e) => onChange(e.target.value)}
								  />
							  </Paper>
						  </Container> : null}
				 <Container>
					 <SwitchPanel value={value} index={0}>
						 <ListOfCurrencies currencies={state ? state : currencies}/>
					 </SwitchPanel>
					 <SwitchPanel value={value} index={1}>
						 <ConverterContainer {...props}/>
					 </SwitchPanel>
				 </Container>
			 </Container>
		 </Container>
	);
}
