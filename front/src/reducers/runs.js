const PREFIX = 'RUNS';

const initialState = {
	data : []
};

const runs = (state = initialState, action) => {
	// eslint-disable-next-line
	switch (action.type) {

		case `${PREFIX}_ERRORS`:
			return {
				...state,
				errors : action.data
			};
		case `${PREFIX}_LOAD`:
			return {
				...state,
				isLoad : true
			};

		case `${PREFIX}_LOAD_STOP`:
			return {
				...state,
				isLoad : false
			};

		case `${PREFIX}_CHANGE_FIELD`:
			return {
				...state,
				[action.field] : action.value
			};

		case `${PREFIX}_UPDATE`:
			return {
				...state,
				...action.data
			};

		case `${PREFIX}_OPEN`:
			return {
				...state,
				...action.data,
				isOpen: true
			};

		case `${PREFIX}_CLOSE`:
			return {...initialState};
	}

	return state;
};

export {runs};
