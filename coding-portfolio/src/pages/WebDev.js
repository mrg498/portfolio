import React, { Component } from 'react';
import Jumbotron from '../components/WebDevJumbotron';
import './Page.css';
import './WebDev.css';

export default class WebDev extends Component {
	render() {
		return (
			<div className="Page">
				<div className="WebDevPage-heading">
					<Jumbotron />
				</div>
			</div>
		);
	}
}



