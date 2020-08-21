import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Project.css';

export default class Project extends Component {
	render() {
		return (
			<div className="Project">
				<Jumbotron
					fluid
					style={{
						backgroundImage:
							`url(${this.props.project_image})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
						height: '500px'
					}}
				>
					<Container className='Project_jumbotron-text-container'>
						<h1>Fluid jumbotron</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}
