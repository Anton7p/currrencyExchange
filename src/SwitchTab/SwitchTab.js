import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {ConverterContainer} from "../Converter/ConverterContainer";
import {ListOfCurrenciesContainer} from "../ListOfCurrencies/ListOfCurrenciesContainer";

function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		 <div
			  role="tabpanel"
			  hidden={value !== index}
			  id={`simple-tabpanel-${index}`}
			  aria-labelledby={`simple-tab-${index}`}
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

//
// function a11yProps(index) {
// 	return {
// 		id: `simple-tab-${index}`,
// 		'aria-controls': `simple-tabpanel-${index}`,
// 	};
// }

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "lightgray",
	},
	app: {
		position: "fixed",
		top: theme.spacing(10),
		maxWidth: 'ls',
	}

}));

export default function SwitchTab(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		 <div className={classes.root}>
			 <AppBar className={classes.app}>
				 <Tabs value={value} onChange={handleChange} aria-label="simple tabs Currency"
						 fullWidth={true}
						 textColor="secondary">
					 <Tab label="Список валют"/>
					 <Tab label="Конвертер валют"/>
				 </Tabs>
			 </AppBar>
			 <TabPanel value={value} index={0}>
				 <ConverterContainer {...props}/>
			 </TabPanel>
			 <TabPanel value={value} index={1}>
				 <ListOfCurrenciesContainer {...props}/>
			 </TabPanel>
		 </div>
	);
}
