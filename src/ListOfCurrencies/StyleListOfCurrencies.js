import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.spacing(1),
		margin: theme.spacing(1),
		[theme.breakpoints.between('sm', 'md')]: {
			backgroundColor: 'lightgrey',
		},
	},
	title: {
		marginTop: theme.spacing(1),
		fontSize: theme.spacing(2.5),
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: theme.spacing(1.5),
		},
		'& .MuiToolbar-regular': {
			minHeight: theme.spacing(4)
		},
		alignItems: 'flex-end',
	},
	icon: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},

		transform: 'rotate(90deg)',
		height: theme.spacing(3),
		fontSize: theme.spacing(2),
	},
	container: {
		[theme.breakpoints.between('xs', 'sm')]: {
			flexWrap: 'nowrap',
			justifyContent: 'space-between'
		},
	},
	value: {
		[theme.breakpoints.between('xs', 'sm')]: {
			maxWidth: theme.spacing(22),
			justifyContent: 'space-between'
		},

	},
	diff: {
		[theme.breakpoints.between('xs', 'sm')]: {
			marginLeft: theme.spacing(5)
		},
	},
	green: {
		color: theme.palette.success.main,

	},
	arrow:{
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: theme.spacing(2.2),
			padding: theme.spacing(0.2),
			marginBottom:theme.spacing(0.4),
		},
	},
	red: {
		color: theme.palette.secondary.main,
	},

}));

