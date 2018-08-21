import {PREFIX_RUNS as PREFIX} from '../const/prefix'

const initialState = {
	data : [
		{
			label         : 'cmd1',
			cmd           : 'ls',
			comment       : 'Comment',
			isOpen        : false,
			isActionsOpen : false,
		},
		{
			label         : 'cmd2',
			cmd           : 'ls',
			comment       : 'Comment',
			isOpen        : false,
			isActionsOpen : false,
		}
	]
};

const runs = (state = initialState, action) => {
	let data;
	// eslint-disable-next-line
	switch (action.type) {

		case `${PREFIX}_ERRORS`:
			return {
				...state,
				errors : action.data
			};

		case `${PREFIX}_CHANGE_OPEN_ACTIONS`:
			data = state.data.map((run, inx) => {
				if (inx === action.data.inx) run.isActionsOpen = action.data.open;

				return run;
			});
			return {
				...state,
				data
			};

		case `${PREFIX}_CHANGE_OPEN_PANEL`:
			data = state.data.map((run, inx) => {
				if (inx === action.data.inx) run.isOpen = action.data.isOpen;

				return run;
			});
			return {
				...state,
				data
			};
	}

	return state;
};

export {runs};
