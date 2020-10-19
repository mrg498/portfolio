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

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				{/* main routes */}
				<Route
					exact
					path={process.env.PUBLIC_URL + '/'}
					render={(routeProps) => <Home routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/about'}
					render={(routeProps) => <About routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/resume'}
					render={(routeProps) => <Resume routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects'}
					render={(routeProps) => <Projects routeProps={routeProps} />}
				/>
				{/* Project Filter routes */}
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/all'}
					render={(routeProps) => <AllProjects routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/frontend'}
					render={(routeProps) => <FrontEndProjects routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/backend'}
					render={(routeProps) => <BackEndProjects routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/nonweb'}
					render={(routeProps) => <NonWebProjects routeProps={routeProps} />}
				/>
				{/* Project routes */}
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/AnalogCollective'}
					render={(routeProps) => <AnalogCollective routeProps={routeProps} />}
				/>
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/ChloeTingWorkoutBuilder'}
					render={(routeProps) => <ChloeTingWorkoutBuilder routeProps={routeProps} />}
				/>
				{/* No Description Route */}
				<Route
					exact
					path={process.env.PUBLIC_URL + '/projects/ComingSoon'}
					render={(routeProps) => <ComingSoon routeProps={routeProps} />}
				/>
				{/* redirect */}
				<Redirect to={process.env.PUBLIC_URL + '/'} />
			</Switch>
		);
	}
}
