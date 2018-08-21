import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducers';

// TODO: clear
console.log('reducer ', reducer);
const store = createStore(reducer);

ReactDOM.render(

		<Provider store={store}>
			<div>
				<App/>
			</div>
		</Provider>

	,
	document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
