import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import WebDev from '../pages/WebDev';
import Programming from '../pages/Programming'
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/webdev" component={WebDev} />
                    <Route exact path="/programming" component={Programming} />
				</Switch>
            </div>
        )
    }
}

