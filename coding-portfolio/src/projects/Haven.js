import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class Haven extends Component {
	render() {
		return (
			<div className="Project Haven">
				<div className="container jumbo-container">
					<Jumbotron pageName="Haven" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<div className="row">
							<iframe
								title="Haven app demo"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/hOTSSpjybb4"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<h3 className="text-center mb-5">
							<a href="https://github.com/mrg498/fall-2019-music-suggestions/tree/master/Haven/haven-app/backend">
								<span className="">Code Link</span>
							</a>
						</h3>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							An application for users to display artistic profiles and view other user's profiles. Built
							for the academic purpose of learning the Agile Methodology with a group of developers.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							The core feature of the application was to allow users to upload media to the site. So, I
							made use of the multer middleware library to help me handle file uploads by putting
							constraints and filters on the types of files that could be uploaded to the site. For this
							small project, we settled on only allowing certain image mime types and only allowing file
							sizes smaller than 5 megabytes.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> Agile Workflow, Node, MongoDB, Express.js ,(Encryption) Bcrypt,
								Multer, Insomnia
							</li>
							<li>Basic Backend Design</li>
							<li>User Authentication/Authorization</li>
							<li>Upload Multimedia (images)</li>
							<li>Scrum Framework</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
