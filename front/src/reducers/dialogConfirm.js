import {PREFIX_CONFIRM as PREFIX} from '../const/prefix';

const noop = () => {};

const initialState = {
	isOpen  : false,
	question : 'You sure?',
	callOk   : noop
};

const dialogConfirm = (state = initialState, action) => {
	// eslint-disable-next-line
	switch (action.type) {


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

export {dialogConfirm};
