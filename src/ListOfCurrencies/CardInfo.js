import React from 'react';
import {CardInfoCharCode} from "./CardInfoCharCode";
import {CardInfoValue} from "./CardInfoValue";
import CardInfoDiff from "./CardInfoDiff";
import img from '../image/arrow.png'
import {Grid} from "@material-ui/core";

export function CardIfo(props) {
	return (
		 <Grid container xs={12}>
			 <Grid item xs={3}>
				 <CardInfoCharCode {...props}/>
			 </Grid>
			 <Grid  >
				 <img src={img} alt=""/>
			 </Grid>
			 <Grid item xs={4} >
				 <CardInfoValue  {...props}/>
			 </Grid>
			 <Grid item xs={4} >
				 <CardInfoDiff {...props}/>
			 </Grid>
		 </Grid>
	);
}
