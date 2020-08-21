import React, { Component } from 'react';
import Jumbotron from '../components/ProgrammingJumbotron';
import './Page.css';
import './Programming.css';

export default class Programming extends Component {
	render() {
		return (
			<div className="Page">
				<div className="ProgrammingPage-heading">
					<Jumbotron />
				</div>
			</div>
		);
	}
}