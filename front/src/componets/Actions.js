import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import connect from "react-redux/es/connect/connect";
import {PREFIX_RUNS as PREFIX} from "../const/prefix";
import Api from '../api';

const ITEM_HEIGHT = 48;

const Actions = (state) => {

	const open = state.run.isActionsOpen;

	const handlerDelete = async () => {
		if (!window.confirm('You sure?')) return false;
		alert('DD');
	};
	const handlerSaveChanges = async () => {
		await Api.update(state.run);
		state.changeOpenActions({inx: state.inx, open : false});
	};

	return (
		<span role="actions">
			<IconButton
				aria-label="More"
				onClick={ev => {
					ev.preventDefault();
					ev.target.setAttribute('role', 'actions');
					state.changeOpenActions({inx: state.inx, open : !open});
				}}
				aria-haspopup="true"
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				open={open}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: 200,
					},
				}}
			>
				<MenuItem key={'RUN' + state.inx} role="action">RUN</MenuItem>
				<MenuItem key={'RUN & EXIT' + state.inx} role="action">RUN & EXIT</MenuItem>
				<MenuItem key={'SAVE CHANGES' + state.inx} role="action" onClick={() =>handlerSaveChanges()}>SAVE CHANGES</MenuItem>
				<MenuItem key={'DELETE' + state.inx} role="action">DELETE</MenuItem>
				<Divider/>
				<MenuItem key={'CANCEL ' + state.inx} role="action" onClick={ev => {
					ev.preventDefault();
					ev.target.setAttribute('role', 'actions');
					state.changeOpenActions({inx: state.inx, open : false});
				}}>CANCEL</MenuItem>
			</Menu>
		</span>
	);
};


export default connect(
	state => ({
		store : state.runs,
	}),
	dispatch => ({
		changeOpenActions : (data) => dispatch({type :`${PREFIX}_CHANGE_OPEN_ACTIONS`, data}),
	})
)(Actions);
