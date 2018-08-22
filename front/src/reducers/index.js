import {combineReducers} from 'redux';
import {runs} from './runs'
import {dialogCreateRun} from './dialogCreateRun'
import {dialogConfirm} from './dialogConfirm'

const reducer = combineReducers({
	runs,
	dialogConfirm,
	dialogCreateRun
});

export {reducer};
