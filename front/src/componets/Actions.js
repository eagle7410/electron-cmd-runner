import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
	'RUN',
	'RUN & EXIT',
];

const ITEM_HEIGHT = 48;

// const Actions = () => {
// 	return (
// 		<span>
// 			<IconButton
// 				aria-label="More"
// 				onClick={ev => console.log('ev is', ev) }
// 				aria-haspopup="true"
// 			>
// 				<MoreVertIcon />
// 			</IconButton>
// 			<Menu
// 				id="long-menu"
// 				PaperProps={{
// 					style: {
// 						maxHeight: ITEM_HEIGHT * 4.5,
// 						width: 200,
// 					},
// 				}}
// 			>
// 				{options.map(option => (
// 					<MenuItem key={option} selected={option === 'Pyxis'}>
// 						{option}
// 					</MenuItem>
// 				))}
// 			</Menu>
// 		</span>
// 	);
// };
class Actions extends React.Component {
	state = {
		anchorEl: null,
	};

	handleClick = event => {
		event.preventDefault();
		this.setState({ anchorEl: event.currentTarget });
		return false;
	};

	handleClose = (event) => {
		event.preventDefault();
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<span >
				<IconButton
					role="button"
					aria-hidden="true"
					aria-label="More"
					aria-owns={open ? 'long-menu' : null}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					<MoreVertIcon />
				</IconButton>
				<Menu
					id="long-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={this.handleClose}
					PaperProps={{
						style: {
							maxHeight: ITEM_HEIGHT * 4.5,
							width: 200,
						},
					}}
				>
					{options.map(option => (
						<MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
							{option}
						</MenuItem>
					))}
				</Menu>
			</span>
		);
	}
}

export default Actions;
