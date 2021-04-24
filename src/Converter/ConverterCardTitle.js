import React from 'react';
import {Grid, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleConverter";

export  function ConverterCardTitle(props) {
	const classes = useStyles();
	return (
		 <Toolbar>
			 <Typography disabled
							 className={classes.title}
							 variant='h6'>
				 {props.id === 'from' ? props.title.titleFrom : props.title.titleTo}
			 </Typography>
		 </Toolbar>
	);
}
