import React from 'react';
import {Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleConverter";

export function ConverterCardTitle(props) {
	const classes = useStyles();
	if (!props.convertTo) return null
	return (
		 <Toolbar>
			 <Typography disabled
							 className={classes.title}
							 variant='h6'>
				 {props.id === 'from' ? props.convertFrom.Name : props.convertTo.Name}
			 </Typography>
		 </Toolbar>
	);
}
