import {PREFIX_CONFIRM as PREFIX} from '../const/prefix';

const noop = () => {};

const initialState = {
	isOpen  : false,
	question : '',
	callOk   : noop
};
// TODO: Back
const dialogConfirm = (state = initialState, action) => {
	// eslint-disable-next-line
	switch (action.type) {

		case `${PREFIX}_ERRORS`:
			return {
				...state,
				errors: action.data
			};
	}
	return state;
};

export {dialogConfirm};
