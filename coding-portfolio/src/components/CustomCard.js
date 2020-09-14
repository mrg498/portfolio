import React, { Component } from 'react';
import './CustomCard.css';

export default class CustomCard extends Component {
	render() {
		return (
			<div className="CustomCard">
				<div class="card">
					<img src={this.props.image_src} class="card-img-top" alt={this.props.image_alt} />
					<div class="card-body">
						<h5 class="card-title">{this.props.title}</h5>
						<p class="card-text">{this.props.description}</p>
						<a href={this.props.link} class="btn btn-primary">
							{this.props.button_text}
						</a>
					</div>
				</div>
			</div>
		);
	}
}
