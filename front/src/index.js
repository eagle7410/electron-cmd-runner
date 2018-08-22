import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';
import {reducer} from './reducers';


const composeEnhancers = composeWithDevTools({
	// options like actionSanitizer, stateSanitizer
});

const store = createStore(reducer, devToolsEnhancer());

render(
		<Provider store={store}>
			<App/>
		</Provider>
	,
	document.getElementById('root')
);

registerServiceWorker();
