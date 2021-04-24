import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		padding: 0,
	},
	root_actual: {
		position: "relative",
		backgroundColor: theme.palette.info.light,
		padding: 0,
	},
	content: {
		backgroundColor: theme.palette.info.light,
		position: 'sticky',
		padding: 0,
		top: 0,
		zIndex: 1000
	},
	header: {
		minHeight: theme.spacing(14),
		display: 'flex',
		justifyContent: 'center'

	},
	paper: {
		borderRadius: '0',
		'& .MuiTab-root': {
			color: theme.palette.info.light,
			fontSize: theme.spacing(3),
			width: '50%',
			maxWidth: 'none'
		},
		'& .MuiTabs-indicator': {
			backgroundColor: theme.palette.primary.main
		}
	},
	input: {
		marginTop: theme.spacing(6),
		position: 'sticky',
		top: theme.spacing(22),
		autoComplete: 'off',
		zIndex: 999,
		'& .MuiInputBase-root': {
			fontSize: theme.spacing(5),
			minHeight: theme.spacing(10)
		}
	},
	button: {

		marginTop: theme.spacing(2),
		position: 'sticky',
		top: theme.spacing(7),
		zIndex: 999,
	},
	title: {
		fontSize: theme.spacing(7),
	},
	tabs: {
		width: '100%'
	},
	footer: {
		maxHeight: theme.spacing(4),
		position: 'absolute',
		left: 0,
		bottom: 0,
		backgroundColor: theme.palette.info.light,
	},
	text: {
		fontSize: theme.spacing(2),
	},
}));
