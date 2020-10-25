import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class AnalogCollective extends Component {
	render() {
		return (
			<div className="Project AnalogCollective">
				<div className="container jumbo-container">
					<Jumbotron pageName="Analog Collective" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<div className="row">
							<iframe
								title="analog collective demo"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/3F7orkRbcC0"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<h3 className="text-center mb-5">
							<a href="https://analogcollective.com/">
								<span className="">analogcollective.com</span>
							</a>
						</h3>

						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							For this project I was hired to build the frontend for a flask app. After conversations with
							the client and the backend developer, we decided to build from the basic frontend that had
							been made to demonstrate backend functionality. This meant that the tech stack would be the
							Jinja templating engine that comes with flask, jQuery, HTML, and CSS. The application is
							heavily reliant on ‘track’ and ‘playlist’ data pulled from the Spotify API, so I also used
							the jQuery plugin datatables.net to make the tables searchable, selectable, and interactive.
							Furthermore, since the application is made for musicians/artists, it was very important to
							the client that the design look sleek and aesthetic, while not compromising the data heavy
							functionality that makes the platform useful.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							Since the application was data intensive, I used the datatables.net jQuery plugin to allow
							users to easily search, select, and edit data presented in tables. The most useful features
							of this library was the ability to allow users to filter data by search term or column
							ordering as well as select data rows to send to the backend with Ajax. The documentation for
							the datatables.net plugin is extensive, and the forums are very responsive making for a
							pleasant experience. 1:50 of the demo video shows these features in use.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li><em>New Tech:</em> Jinja templating, basic flask app workflow, datatables.net</li>
							<li>Importance of CSS organization, CSS vars, structured class names (BEM)</li>
							<li>Write then refactor</li>
							<li>Mobile first design</li>
							<li>Window loading screen</li>
							<li>Wrapper for dynamic footer</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
