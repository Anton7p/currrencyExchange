import Box from "@material-ui/core/Box";
import React from "react";

export function SwitchPanel({children, value, index}) {
	return (
		 <div hidden={value !== index}>
			 {value === index && (<Box p={3}>{children}</Box>)}
		 </div>
	);
}