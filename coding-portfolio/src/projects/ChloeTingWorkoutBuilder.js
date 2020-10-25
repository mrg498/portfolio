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
							<a className="mx-3" href="https://mrg498.github.io/chloe-ting-react-app/">
								<span className="">Project Link</span>
							</a>
							<a className="mx-3" href="https://github.com/mrg498/chloe-ting-react-app">
								<span className="">Code Link</span>
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
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							While building this application, I was made aware that Google had substantially limited the
							number of requests I was allowed to make to the Youtube API. Because of this limitation, I
							had to make sure that I wasn’t unnecessarily making requests, and using it as efficiently as
							possible. So, rather than making a request on every re-search, I only made a request on the
							very first search request of each term, and I stored an array of the results in local storage. This
							way, on any subsequent search of that term, I could just pull from the locally stored
							results and bypass making another request. Once I figured this out I was no longer hitting
							my quota limit!
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> Youtube API, API calls in React components, process.env with React, embedding youtube videos with iframe 
							</li>
							<li>Setting react states</li>
							<li>Creating helper functions helps with readability and writing clean code</li>
							<li>Deploying a simple React app to github pages</li>
							<li>Simplicity lends itself to useability</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
