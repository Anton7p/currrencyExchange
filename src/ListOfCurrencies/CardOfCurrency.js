import React from 'react';
import {Card, Container} from "@material-ui/core";
import classes from "./ListOfCurrencies.module.css";

export function CardOfCurrency(props) {

	return (
		 <Container maxWidth="md">
			 <Card className={classes.card}>
				 <div className={classes.card_item__name}>
					 {props.Name}
				 </div>
				 <div className={classes.card_item__value}>
					 <div><span>{props.Nominal} {props.CharCode}</span>
						 <span>
           	               <img src="/image/arrow_horizontal.png" alt=""/>
								</span>
						 <span>{props.Value}RUB</span>
					 </div>
					 <div className={props.priceRise ? classes.green : classes.red}><span>arrow {props.diff}</span>
					 </div>
				 </div>
			 </Card>
		 </Container>
	);
}

export default CardOfCurrency;