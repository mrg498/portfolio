import React, { Component } from 'react';
import Nav from './Navigation';
import './Jumbotron.css';

export default class Jumbotron extends Component {
	render() {
		return (
			<div className="Jumbotron">
				<h1 className="display-1"><span>{this.props.pageName}</span></h1>
                <Nav/>
			</div>
		);
	}
}
