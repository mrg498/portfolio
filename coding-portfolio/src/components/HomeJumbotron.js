import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.css';
export default class HomeJumbotron extends Component {
	render() {
		return (
			<div className="Jumbotron">
				<Jumbotron fluid>
					<Container>
						<h1 className="Jumbotron_title">Hi there!</h1>
						<p className="Jumbotron_message">Thanks for visiting Miles Grossenbacher's coding portfolio! If you're a potential employer, use can use the navigation bar to find the relevant topics. Otherwise, feel free to explore the site!</p>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}
