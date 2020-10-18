import React, { Component } from 'react';
import Nav from './Navigation';
import { Link } from 'react-router-dom';
import Image_home from '../images/home.png';
import './Jumbotron.css';

export default class Jumbotron extends Component {
	render() {
		return (
			<div className="Jumbotron">
				<Link to={'/'}>
					<div className="home-icon__wrapper">
						<img src={Image_home} alt="home" />
					</div>
				</Link>

				<h1 className="display-1">
					<span>{this.props.pageName}</span>
				</h1>
				<Nav />
			</div>
		);
	}
}
