import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducers';

const store = createStore(reducer, composeWithDevTools());

render(
		<Provider store={store}>
			<App/>
		</Provider>
	,
	document.getElementById('root')
);

registerServiceWorker();
