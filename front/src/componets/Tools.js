import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Tools = (props)  => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Button color="inherit">Create command</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Tools;
