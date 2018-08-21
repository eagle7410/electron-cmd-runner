import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Actions from './Actions'

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
});


const ListCommand = (state) => {

	const { classes } = state;

	return (
		<div style={{marginTop : 45}} >
			<ExpansionPanel defaultExpanded={false} >
				<ExpansionPanelActions >
					<Actions />
				</ExpansionPanelActions>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}

				>
					<Typography className={classes.heading}>


						Expansion Panel 1
					</Typography>
				</ExpansionPanelSummary>

				<ExpansionPanelDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consecte
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>


			<ExpansionPanel onClick={ev => {
				ev.preventDefault();
				return false;
				console.log('ev change is', ev.target.getAttribute('role'))
			}}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>
						<Actions />
						Expansion Panel 2
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

export default withStyles(styles)(ListCommand);
