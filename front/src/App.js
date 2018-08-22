import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tools from './componets/Tools'
import ListCommand from './componets/ListCommand'
import DialogCreateRun from './componets/DialogCreateRun'
import connect from "react-redux/es/connect/connect";
import {PREFIX_RUNS} from "./const/prefix";
import Api from './api';

class App extends Component {
	constructor() {
		super();

		Api.getAll()
			.then(data => this.props.init(data))
			.catch(err => alert(err.message ? err.message : err));
	}

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
export default connect(
	state => ({}),
	dispatch => ({
		init   : (data) => dispatch({type :`${PREFIX_RUNS}_INIT`, data}),
	})
)(App);
