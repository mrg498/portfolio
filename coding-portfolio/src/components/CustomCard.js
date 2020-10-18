import React, { Component } from 'react';
import './CustomCard.css';
import {Link} from 'react-router-dom';

export default class CustomCard extends Component {
	render() {
		return (
			<div className="CustomCard">
				<div className="card">
					<img src={this.props.image_src} class="card-img-top" alt={this.props.image_alt} />
					<div className="card-body">
						<h5 className="card-title">{this.props.title}</h5>
						<p className="card-text">{this.props.description}</p>
						<Link to={this.props.link} className="btn btn-primary">{this.props.button_text}</Link>
					</div>
				</div>
			</div>
		);
	}
}
