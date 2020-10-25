import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../mainPages/Home';
import About from '../mainPages/About';
import Resume from '../mainPages/Resume';
import Projects from '../mainPages/Projects';
import AllProjects from '../projectPages/AllProjects';
import FrontEndProjects from '../projectPages/FrontEndProjects';
import BackEndProjects from '../projectPages/BackEndProjects';
import NonWebProjects from '../projectPages/NonWebProjects';
import ComingSoon from '../projects/ComingSoon';
import AnalogCollective from '../projects/AnalogCollective';
import ChloeTingWorkoutBuilder from '../projects/ChloeTingWorkoutBuilder';
import Handoff from '../projects/Handoff';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				{/* main routes */}
				<Route exact path="/" render={(routeProps) => <Home routeProps={routeProps}/>} />
				<Route exact path="/about" render={(routeProps) => <About routeProps={routeProps}/>} />
				<Route exact path="/resume" render={(routeProps) => <Resume routeProps={routeProps}/>} />
				<Route exact path="/projects" render={(routeProps) => <Projects routeProps={routeProps}/>} />
				{/* Project Filter routes */}
				<Route exact path="/projects/all" render={(routeProps) => <AllProjects routeProps={routeProps}/>} />
				<Route exact path="/projects/frontend" render={(routeProps) => <FrontEndProjects routeProps={routeProps}/>} />
				<Route exact path="/projects/backend" render={(routeProps) => <BackEndProjects routeProps={routeProps}/>} />
				<Route exact path="/projects/nonweb" render={(routeProps) => <NonWebProjects routeProps={routeProps}/>} />
				{/* Project routes */}
				<Route exact path="/projects/AnalogCollective" render={(routeProps) => <AnalogCollective routeProps={routeProps}/>} />
				<Route exact path="/projects/ChloeTingWorkoutBuilder" render={(routeProps) => <ChloeTingWorkoutBuilder routeProps={routeProps}/>} />
				<Route exact path="/projects/Handoff" render={(routeProps) => <Handoff routeProps={routeProps}/>} />
				{/* No Description Route */}
				<Route exact path="/projects/ComingSoon" render={(routeProps) => <ComingSoon routeProps={routeProps}/>} />
				<Redirect to="/" />
			</Switch>
		);
	}
}
