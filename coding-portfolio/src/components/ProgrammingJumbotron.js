import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.css';
export default class HomeJumbotron extends Component {
	render() {
		return (
			<div className="Jumbotron">
				<Jumbotron fluid>
					<Container>
						<h1 className="Jumbotron_title">General Programming!</h1>
						<p className="Jumbotron_message">A mixture of projects in a variety of languages and fields</p>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}