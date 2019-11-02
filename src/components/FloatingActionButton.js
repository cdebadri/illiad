import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	fab: {
		bottom: theme.spacing(10),
		right: theme.spacing(2),
		position: 'fixed',
		zIndex: '9999'			
	}
}));

const FloatingActionButton = () => {
	const classes = useStyles();
	return (
		<Fab color="primary" aria-label="add" className={classes.fab}>
			<AddIcon />
		</Fab>
	)
}

export default FloatingActionButton;