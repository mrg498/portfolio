import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';
import Navigation from './components/Navigation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Routes/>
			</div>
		);
	}
}

export default App;
