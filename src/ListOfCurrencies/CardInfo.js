import React from 'react';
import {CardInfoCharCode} from "./CardInfoCharCode";
import {CardInfoValue} from "./CardInfoValue";
import CardInfoDiff from "./CardInfoDiff";
import img from '../image/arrow.png'
import {Button, Grid, Toolbar} from "@material-ui/core";
import HeightIcon from "@material-ui/icons/Height";
import {useStyles} from "./StyleListOfCurrencies";
import Box from "@material-ui/core/Box";


export function CardIfo(props) {
	const classes = useStyles();
	return (
		 <Toolbar>
			 <Box>
				 <CardInfoCharCode {...props}/>
				 <img src={img} alt="" className={classes.icon}/>
				 <CardInfoValue  {...props}/>
			 </Box>
			 <Box>
				 <CardInfoDiff {...props}/>
			 </Box>
		 </Toolbar>
	);
}
