import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="gradient">
					<div className="container">
						<Jumbotron pageName="Coding Portfolio" />
						<h6 className="quote mt-5 text-center">&mdash;There are only two hard problems in Computer Science: maintaining a portfolio and naming things</h6>
					</div>
				</div>
			</div>
		);
	}
}
