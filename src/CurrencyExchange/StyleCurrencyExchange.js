import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

	root: {
		minHeight: window.innerHeight,
		position: "relative",
		backgroundColor: theme.palette.info.light,
		padding: 0,

	},
	content: {
		backgroundColor: theme.palette.info.light,
		position: 'sticky',
		padding: 0,
		top: 0,
		zIndex: 1000,

	},
	header: {
		minHeight: theme.spacing(10),
		display: 'flex',
		justifyContent: 'center'

	},
	paper: {
		borderRadius: '0',
		'& .MuiTab-root': {
			color: theme.palette.primary.dark,
			fontSize: theme.spacing(1.5),
			width: '50%',
			maxWidth: 'none'
		},
		'& .MuiTabs-indicator': {
			backgroundColor: theme.palette.primary.main
		}
	},
	input: {
		marginTop: theme.spacing(5),
		position: 'sticky',
		top: theme.spacing(17),
		autoComplete: 'off',
		zIndex: 999,
		'& .MuiInputBase-root': {
			fontSize: theme.spacing(2),
			minHeight: theme.spacing(5)
		}
	},
	button: {
		marginTop: theme.spacing(2),
		position: 'sticky',
		top: theme.spacing(7),
		zIndex: 999,
	},
	title: {
		fontSize: theme.spacing(2),
	},
	tabs: {
		width: '100%'
	},

	text: {
		fontSize: theme.spacing(2),
	},
	card:{
		padding:0,
	}
}));
