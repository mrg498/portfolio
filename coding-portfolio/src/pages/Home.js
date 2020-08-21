import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from '../components/HomeJumbotron';
import './Page.css';
import './Home.css';
import Image1 from '../images/projects/delay-plugin.png';
import Image2 from '../images/projects/chloe-ting-builder.png';
import DynamicCard from '../components/DynamicCard';

export default class Home extends Component {
	render() {
		return (
			<div className="Page">
				<div className="HomePage-heading">
					<Jumbotron />
				</div>
				<Container className="about_container">
					<h2 className="about_header">Recent Projects</h2>
					<Row>
						<Col md={6}>
							<DynamicCard
								card_src={Image1}
								card_title="Delay Plugin"
								card_text="An audio delay plugin built with C++, JUCE framework"
							/>
						</Col>
						<Col>
							<DynamicCard
								card_src={Image2}
								card_title="Workout Builder"
								card_text="Using youtube's api to build custom fitness workouts"
								project_url="chloe-ting-react-app"
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
