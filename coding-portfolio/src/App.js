import React, { Component } from 'react';
import "./App.css";
import Navigation from './components/Navigation';
import Home from './pages/Home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />

			</div>
		);
	}
}

export default App;
