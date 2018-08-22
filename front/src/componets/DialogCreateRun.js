import React from 'react';
import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {PREFIX_RUN_CREATE as PREFIX} from "../const/prefix";

const fields = {
	label   : 'Label',
	cmd     : 'Command',
	comment : 'Comment',
};

const DialogCreateRun = (state) => {

	return (
		<div>
			<Dialog
				open={state.store.isOpen}
				onClose={state.close}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Create new command for run"}</DialogTitle>
				<DialogContent>
					{Object.keys(fields).map(prop =>
						<div key={`div_create_${prop}`}>
							<TextField
								id={`create_${prop}`}
								key={`create_${prop}`}
								label={fields[prop]}
								value={state.store[prop]}
								onChange={ev => state.input({field : prop, value: ev.target.value})}
								error={!!state.store.errors[prop]}
								helperText={state.store.errors[prop] || ''}
							/>
						</div>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={state.close} color="primary" autoFocus>
						Chancel
					</Button>
					<Button onClick={() => alert('Create run')} color="primary" >
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default connect(
	state => ({
		store: state.dialogCreateRun
	}),
	dispatch => ({
		close : () => dispatch({type :`${PREFIX}_CLOSE`}),
		input : (data) => dispatch({type :`${PREFIX}_INPUT`, data}),
	})
)(DialogCreateRun);
