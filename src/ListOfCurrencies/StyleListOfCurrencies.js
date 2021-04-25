import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

	paper: {
		borderRadius: theme.spacing(1),
		margin: theme.spacing(1),
		padding: 0,
	},
	title: {
		// marginTop: theme.spacing(1),
		// fontSize: theme.spacing(3),
	},
	green: {
		color: theme.palette.success.main,
		fontSize: theme.spacing(2),

	},
	red: {
		color: theme.palette.secondary.main,
		fontSize: theme.spacing(2),
	},
	toolbar: {
		padding: 0,
		paddingLeft: theme.spacing(1),
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection:'row'
	},
	content:{
		display:'flex',
		flexDirection:'row'

	}
	,
	container: {
		justifyContent: 'flex-end',
		padding: 0,
		// fontSize: theme.spacing(5),
		'& .MuiSvgIcon-root': {
			fontSize: theme.spacing(2),
			marginBottom: theme.spacing(0.3),
		}
	},
	currency: {
		// fontSize: theme.spacing(5),
		padding: 0,
		lineHeight: 0,
	},
	icon: {
		height: theme.spacing(3),
		width: theme.spacing(3.5),
		display: 'flex',
		justifyContent: 'center',
		color: 'grey',
		alignItems: 'center',
		fontWeight: 'normal',
	},
	arrow: {
		height: theme.spacing(3),
		fontSize: theme.spacing(4),
	}
}));

