import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import {useStyles} from "./StyleCurrencyExchange";
import {Header} from "./Header";
import {TabsPanelTitle} from "../SwitchTabs/TabsPanelTitle";
import {PageContent} from "./PageContent";


export function CurrencyExchange(props) {
	const classes = useStyles();
	const {currencies} = props

	const [state, setState] = useState();

	useEffect(() => {
		setState(currencies)
	}, [props]);

	return (
		 <Container className={classes.root} maxWidth={'lg'}>
			 <Container className={classes.content}>
				 <Header/>
				 <TabsPanelTitle/>
			 </Container>
			 <PageContent currencies={state ? state : currencies} setState={setState}/>
		 </Container>
	);
}
