import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import pdf from '../images/Summer2020Resume.pdf';
import './Resume.css';

export default class Resume extends Component {
	render() {
		return (
			<div className="Resume Page">
				<div className="container">
					<Jumbotron pageName="CV & Resume" />
				</div>
				<main>
					<section className="container">
						<h3 className="section-header">My Resume:</h3>
						<iframe title="pdf" src={pdf} width="100%" height="800px" className="pdf__iframe" />
						<p className="pdf__link">
							Open my <a href={pdf}>resume</a> as a PDF file.
						</p>
					</section>
					<section className="container">
						<h3 className="section-header">My CV:</h3>
						<h5 className="section-header__subheader">Education</h5>
						<p className="cv-text">
							<ul>
								<li>NYU Computer Science</li>
								<li>NYU Music Technology</li>
								<li>
									IRCAM (Institute for Research and Coordination in Acoustics/Music), Paris, Fr. Dec.
									2016 Studies in Digital Signal Processing and Sound Spatialization with MAX/MSP
								</li>
							</ul>
						</p>
						<h5 className="section-header__subheader">Work Experience</h5>
						<p className="cv-text">
							<ul>
								<li>Handoff (<a href="https://www.handofftech.com/">website</a>)</li>
								<li>Analog Collective (<a href="https://www.analogcollective.com/">website</a>)</li>
								<li>Massive Music</li>
								<li>NYU Clive Davis</li>
							</ul>
						</p>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
