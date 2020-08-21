import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import WebDev from '../pages/WebDev';
import Programming from '../pages/Programming';
import Project from '../pages/Project';
import Image2 from '../images/projects/chloe-ting-builder.png';
export default class Routes extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/webdev" component={WebDev} />
					<Route exact path="/programming" component={Programming} />
					<Route
						exact
						path="/project/chloe-ting-react-app"
						render={(routerProps) => 
                            <Project 
                                routeProps={routerProps} 
                                name="Chloe Ting Workout Builder"
                                project_image={Image2} 
                                />
                        }
					/>
				</Switch>
			</div>
		);
	}
}
