import './CurrencyExchange.css';
import SwitchTab from "../SwitchTab/SwitchTab";
import {AppBar, Container, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
	},
	title: {
		flexGrow: 10
	},

}))


export function CurrencyExchange(props) {
	const classes = useStyles()
	return (
		 <>
			 <Container maxWidth="lg" position={"sticky"}>
				 <AppBar position={"static"}>
					 <Container maxWidth="lg">
						 <Toolbar>
							 <Typography className={classes.title} variant='h3'>Currency Exchange</Typography>
						 </Toolbar>
					 </Container>
				 </AppBar>
			 </Container>
			 <Container maxWidth="lg">
				 <SwitchTab  {...props} />
			 </Container>
		 </>
	)
		 ;
}

