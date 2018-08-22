import {combineReducers} from 'redux';
import {runs} from './runs'
import {dialogCreateRun} from './dialogCreateRun'

const reducer = combineReducers({
	runs,
	dialogCreateRun
});

export {reducer};
