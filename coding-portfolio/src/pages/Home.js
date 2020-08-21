import React, { Component } from 'react';
import Jumbotron from '../components/HomeJumbotron';
import './Page.css';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="Page">
				<div className="HomePage-heading">
					<Jumbotron />
				</div>
				<h1>Recent Posts</h1>
			</div>
		);
	}
}
