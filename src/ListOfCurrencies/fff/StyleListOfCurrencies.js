import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

	paper: {
		borderRadius: theme.spacing(2),
		margin: theme.spacing(1)
	},
	title: {
		marginTop: theme.spacing(1),
		fontSize: theme.spacing(3),
	},
	green: {
		color: theme.palette.success.main,
		fontSize: theme.spacing(5),

	},
	red: {
		color: theme.palette.secondary.main,
		fontSize: theme.spacing(5),
	},
	container: {
		justifyContent: 'flex-end',
		fontSize: theme.spacing(5),
		'& .MuiSvgIcon-root': {
			fontSize: theme.spacing(4),
			marginBottom: theme.spacing(0.5),
		}
	},
	currency: {
		fontSize: theme.spacing(5),
	},
	icon: {
		transform: 'rotate(90deg)',
		color: theme.palette.info.light,
		height: theme.spacing(8),
		fontSize: theme.spacing(10),
		fontWeight: 'normal',
	},
}));

