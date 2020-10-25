import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class Portfolio extends Component {
	render() {
		return (
			<div className="Project Portfolio">
				<div className="container jumbo-container">
					<Jumbotron pageName="Portfolio" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<h1 className="my-3 text-center">You're here!</h1>
						<h3 className="text-center mb-5">
							<a href="https://github.com/mrg498/portfolio">
								<span className="">Code Link</span>
							</a>
						</h3>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							My portfolio website! Just a place to catalog my projects, share my resume, and show what I
							can do. It’s a simple react app with client-side routing and modular, reusable components.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							Using the react-router-dom library, I am able to use client side routing while still getting
							the speed of a single page web-app. I abstract my routes into a separate component and use
							the react-router-dom library to handle url matches to display the correct pages.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> react-router-dom, class-based react components 
							</li>
							<li>Re-usable components with props</li>
                            <li>Structuring a large react app</li>
                            <li>Deploying a react app with client side routes</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
