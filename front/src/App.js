import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Tools from './componets/Tools'
import ListCommand from './componets/ListCommand'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to cmd runner</h1>
					<Tools/>
				</header>
				<ListCommand />
			</div>
		);
	}
}

export default App;
