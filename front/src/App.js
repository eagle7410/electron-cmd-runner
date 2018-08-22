import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tools from './componets/Tools'
import ListCommand from './componets/ListCommand'
import DialogCreateRun from './componets/DialogCreateRun'

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
				<DialogCreateRun/>
			</div>
		);
	}
}

export default App;
