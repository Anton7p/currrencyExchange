import React from 'react';
import {Paper} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {setMode} from "../redux/SwitchTabsReduser";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../CurrencyExchange/StyleCurrencyExchange";


export function TabsPanelTitle(props) {
	const classes = useStyles();
	const dispatch = useDispatch()
	const actual = useSelector(state => state.ActualTab.actual)

	const handleChange = (event, newValue) => {
		dispatch(setMode(newValue))
	};

	return (
		 <Paper className={classes.paper}>
			 <Tabs value={actual} onChange={handleChange}
					 className={classes.tabs}
					 textColor="secondary">
				 <Tab label="Список валют"/>
				 <Tab label="Конвертер валют"/>
			 </Tabs>
		 </Paper>
	);
}
