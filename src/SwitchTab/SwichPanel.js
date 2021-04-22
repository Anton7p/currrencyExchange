import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import React from "react";

export function SwitchPanel(props) {
	const {children, value, index, ...other} = props;
	return (
		 <div
			  // role="tabpanel"
			  hidden={value !== index}
			  {...other}
		 >
			 {value === index && (
				  <Box p={3}>
					  <Typography>{children}</Typography>
				  </Box>
			 )}
		 </div>
	);
}