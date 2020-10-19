import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class ChloeTingWorkoutBuilder extends Component {
	render() {
		return (
			<div className="Project ChloeTingWorkoutBuilder">
				<div className="container jumbo-container">
					<Jumbotron pageName="Chloe Ting Workout" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<div className="row">
							<iframe
                                title="chloe ting workout builder"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/tYRixztN050"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<h3 className="text-center mb-5">
							<a href="https://mrg498.github.io/chloe-ting-react-app/">
								<span className="">Project Link</span>
							</a>
						</h3>

						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							In this personal project I made, I wanted to explore how to interact with Google’s Youtube
							API as well as load videos into a react-app using http requests. My girlfriend loves these
							Chloe Ting workout videos, but she often spends upwards of 10 minutes trying to pick a
							couple of videos to follow. This tool filters Chloe’s videos by a search parameter and
							displays a video pair. Simple as that!
						</p>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
