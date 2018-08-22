import {PREFIX_RUN_CREATE as PREFIX} from '../const/prefix';


const initialState = {
	isOpen  : false,
	label   : '',
	cmd     : '',
	comment : '',
	errors  : {}
};

const dialogCreateRun = (state = initialState, action) => {

	// eslint-disable-next-line
	switch (action.type) {

		case `${PREFIX}_ERRORS`:
			return {
				...state,
				errors : action.data
			};

		case `${PREFIX}_INPUT`:
			return {
				...state,
				[action.data.field] : action.data.value
			};

		case `${PREFIX}_OPEN`:
			return {
				...state,
				isOpen : true
			};
		case `${PREFIX}_CLOSE`:
			return {...initialState};
	}

	return state;
};

export {dialogCreateRun};

