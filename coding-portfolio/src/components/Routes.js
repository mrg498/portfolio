import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../mainPages/Home';
import About from '../mainPages/About';
import Projects from '../mainPages/Projects';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				{/* main routes */}
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/about" render={() => <About />} />
				<Route exact path="/projects" render={() => <Projects />} />
				<Redirect to="/" />
			</Switch>
		);
	}
}
