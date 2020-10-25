import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class Handoff extends Component {
	render() {
		return (
			<div className="Project Handoff">
				<div className="container jumbo-container">
					<Jumbotron pageName="Handoff" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<div className="row">
							<iframe
								title="handoff1"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/b4ZVpL89uEg"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<div className="row">
							<iframe
								title="handoff2"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/GHsb6CiwfzE"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<h3 className="text-center mb-5">
							<a href="https://www.handofftech.com/">
								<span className="">company website</span>
							</a>
						</h3>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							Handoff is a company I interned for as a full-stack software developer. The backend of their
							service was built in the Spring MVC framework and used the Thymeleaf templates. I worked on
							implementing features for retailers to keep track of inventory and sales, and process and
							handle orders from customers. Functionalities I built were integrated into the retailer
							portal and are currently being used by Handoff retailers!
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							Since any given Handoff retailer had upwards of 200 items in their inventory, and many of
							the items were only distinguishable by container size, package size, or flavor, retailers
							were having trouble keeping track of which product ID corresponded to each item. To help
							them with this, I implemented an autocomplete functionality using the jQuery autocomplete
							library that could query the database as a retailer typed in the name of the product and
							return matches to what they were searching for. A demo of this can be seen in the first
							video above.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> Spring MVC framework, SQL, Thymeleaf templating, jQuery autocomplete 
							</li>
                            <li>Working in a large codebase</li>
							<li>Working on tight deadlines, things needed to be pushed out fast!</li>
                            <li>Template partials</li>
                            <li>MySQL, MySQL Workbench</li>
                            <li>Feature-branch version control workflow</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
