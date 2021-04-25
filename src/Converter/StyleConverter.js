import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down('xs')]: {
			marginTop: theme.spacing(7),
		},
		display: "flex",
		marginTop: theme.spacing(18),
		backgroundColor: theme.palette.info.light,
		minHeight: theme.spacing(25),
		direction: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: theme.spacing(2),

	},
	grid: {
		display: "flex",
		margin: '0 auto',
		justifyContent: 'center',
		alignItems: 'center',

	},
	button: {

		height: theme.spacing(8),
		width: theme.spacing(8),
		borderRadius: '50%'
	},
	icon: {
		[theme.breakpoints.down('xs')]: {
			transform: 'rotate(0deg)',
		},
		transform: 'rotate(90deg)',
		color: theme.palette.info.light,
		height: theme.spacing(8),
		fontSize: theme.spacing(4),
	},
	paper: {
		borderRadius: theme.spacing(2)
	},
	title: {
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: theme.spacing(2),
		},
		marginTop: theme.spacing(1),
		fontSize: theme.spacing(3),
	},
	input: {
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: theme.spacing(3),
		},
		fontSize: theme.spacing(4),
		textOverflow: 'clip',
		'& .MuiInputBase-input': {
			padding: 0,
		},
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInputBase-root:hover': {
			border: 'none',
		},
		'& .MuiInput-underline:hover': {
			border: 'none',
		},
		'& .MuiInput-underline:after': {
			border: 'none'
		}
	},
	container: {
		marginBottom: theme.spacing(1),
	},
	selector: {
		width: '100%',
		display: 'flex',
		alignItems: 'center'
	},
}));
