import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {reducer} from './reducers';

const store = createStore(reducer, devToolsEnhancer());

render(
		<Provider store={store}>
			<App/>
		</Provider>
	,
	document.getElementById('root')
);

registerServiceWorker();
