import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class WestSideTech extends Component {
	render() {
		return (
			<div className="Project WestSideTech">
				<div className="container jumbo-container">
					<Jumbotron pageName="West Side Tech" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<h3 className="text-center mb-5">
							<a href="https://westsidetechtutors.com/">
								<span className="">Website Link</span>
							</a>
						</h3>
						<h3 className="text-center mb-5">
							<a href="https://github.com/mrg498/west-side-tech">
								<span className="">Code Link</span>
							</a>
						</h3>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							A deployed static frontend website built with simple html, css, and javascript.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							The point of building this website was to deploy a site with a custom domain. I bought a
							domain name through GoDaddy and used github pages to host my site. 
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> GoDaddy, DNS management
							</li>
                            <li>GitHub Pages with custom domain name</li>
							<li>Cool animation for sidebar navigation</li>	
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
