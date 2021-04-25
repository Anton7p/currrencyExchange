import React from 'react';
import {CardInfoCharCode} from "./CardInfoCharCode";
import {CardInfoValue} from "./CardInfoValue";
import CardInfoDiff from "./CardInfoDiff";
import img from '../image/arrow.png'
import {Grid, Toolbar} from "@material-ui/core";
import HeightIcon from "@material-ui/icons/Height";
import {useStyles} from "./StyleListOfCurrencies";


export function CardInfo(props) {
	const classes = useStyles();
	return (
		 <Toolbar>
			 <Grid container className={classes.container}>
				 <Grid container  className={classes.value}>
					 <CardInfoCharCode {...props}/>
					 <HeightIcon className={classes.icon}/>
					 <img src={img} alt="" className={classes.img}/>
					 <CardInfoValue  {...props}/>
				 </Grid>
				 <CardInfoDiff {...props} className={classes.diff}/>
			 </Grid>
		 </Toolbar>
	);
}
