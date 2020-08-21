import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.css';
export default class WebDevJumbotron extends Component {
	render() {
		return (
			<div className="Jumbotron">
				<Jumbotron fluid>
					<Container>
						<h1 className="Jumbotron_title">Web Development!</h1>
						<p className="Jumbotron_message">Frontend and Backend Projects</p>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}