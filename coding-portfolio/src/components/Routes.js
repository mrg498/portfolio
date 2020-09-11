import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../mainPages/Home';
import About from '../mainPages/About';
import Resume from '../mainPages/Resume';
import Projects from '../mainPages/Projects';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				{/* main routes */}
				<Route exact path="/" render={(routeProps) => <Home routeProps={routeProps}/>} />
				<Route exact path="/about" render={(routeProps) => <About routeProps={routeProps}/>} />
				<Route exact path="/resume" render={(routeProps) => <Resume routeProps={routeProps}/>} />
				<Route exact path="/projects" render={(routeProps) => <Projects routeProps={routeProps}/>} />
				<Redirect to="/" />
			</Switch>
		);
	}
}
