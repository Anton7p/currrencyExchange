import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: '75%',
		borderBottom: 'none',
		'& .MuiSelect-root': {
			fontSize: theme.spacing(4),
		},
		'& .MuiSelect-selectMenu': {
			minHeight: 0
		},
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInputBase-root:hover': {
			border: 'none',
		},
		'& .MuiInput-underline:hover:before': {
			border: 'none',
		},
		'& .MuiInput-underline:after': {
			border: 'none'
		}
	},
}));