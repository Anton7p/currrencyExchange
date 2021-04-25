import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.spacing(1),
		margin: theme.spacing(1),
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
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},

		transform: 'rotate(90deg)',
		height: theme.spacing(3),
		fontSize: theme.spacing(2),
	},
	img: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		height: theme.spacing(8),
	},
	container: {
		flexWrap: 'nowrap',
		justifyContent: 'space-between'
	},
	value: {
		[theme.breakpoints.between('xs', 'xs')]: {
			maxWidth: theme.spacing(22),
		},
		[theme.breakpoints.between('sm', 'sm')]: {
			maxWidth: theme.spacing(58),
		},
		[theme.breakpoints.between('md', 'md')]: {
			maxWidth: theme.spacing(70),
		},
		justifyContent: 'space-between'
	},
	currency: {
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(5),
		},
	},
	diff: {
		display: 'flex',
		flexWrap: 'nowrap',
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(5),
		},

		[theme.breakpoints.between('xs', 'sm')]: {
			marginLeft: theme.spacing(5)
		},
	},
	green: {
		display: 'flex',
		color: theme.palette.success.main,
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(4),
		},
	},
	arrow: {
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: theme.spacing(2.4),
			marginTop: theme.spacing(0.2),
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(5),
			marginTop: theme.spacing(1),
		},
	},
	red: {
		display: 'flex',
		color: theme.palette.secondary.main,
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(5),
		},

	},
}));

