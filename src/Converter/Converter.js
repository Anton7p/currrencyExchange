import React from 'react';
import {MultilineTextFields} from "../components/MultilineTextFields";
import {Card, Container, Input} from "@material-ui/core";
import classes from "./CurrencyConverter.module.css";
import Button from "@material-ui/core/Button";


function CurrencyConverter(props) {
	return (
		 <Container maxWidth="sm" className={'input_group__container'}>
		 <div className={classes.currency_converter}>
			 <Card className={classes.currency_choice}>
				 <div className={classes.currency_choice__item}>
					 <div >
					 <span>
						 Австралийский доллар
					 </span>
					 </div>
					 <div className={classes.item_input_group}>
						 <MultilineTextFields />
						 <Input className={classes.item_input_group__input} placeholder="6.10" />
					 </div>
				 </div>
			 </Card>
			 <div className={classes.button}>
				 <Button >
					 <img src="/image/arrow_horizontal.png" alt=""/>
				 </Button>
			 </div>
			 <Card className={classes.currency_choice}>
				 <div className={classes.currency_choice__item}>
					 <div >
					 <span>
						 Австралийский доллар
					 </span>
					 </div>
					 <div className={classes.item_input_group}>
						 <MultilineTextFields />
						 <Input className={classes.item_input_group__input} placeholder="6.10" />
					 </div>
				 </div>
			 </Card>
		 </div>
		 </Container>)
		 ;
}

export default CurrencyConverter;







