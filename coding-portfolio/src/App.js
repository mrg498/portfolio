import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Routes/>
				<Footer/>
			</div>
		);
	}
}

export default App;
