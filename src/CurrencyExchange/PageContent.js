import React from 'react';
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useStyles} from "./StyleCurrencyExchange";
import {InputWithSearch} from "./InputWithSearch";
import {SwitchPanel} from "../SwitchTabs/SwichPanel";
import {ListOfCurrencies} from "../ListOfCurrencies/ListOfCurrencies";
import {ConverterContainer} from "../Converter/ConverterContainer";



export function PageContent(props) {
	const classes = useStyles();
	const actual = useSelector(state => state.ActualTab.actual)


	return (
		 <Container className={classes.root} maxWidth={'md'}>
			 {actual === 0 ? <InputWithSearch {...props}/> : null}
			 <Container className={classes.card}>
				 <SwitchPanel value={actual} index={0}>
					 <ListOfCurrencies {...props}/>
				 </SwitchPanel>
				 <SwitchPanel value={actual} index={1}>
					 <ConverterContainer{...props}/>
				 </SwitchPanel>
			 </Container>
		 </Container>
	);
}
