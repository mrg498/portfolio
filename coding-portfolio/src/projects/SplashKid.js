import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class SplashKid extends Component {
	render() {
		return (
			<div className="Project SplashKid">
				<div className="container jumbo-container">
					<Jumbotron pageName="Splash Kid" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<div className="row">
							<iframe
								title="splash kid demo"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/9wwwd5udPZE"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
                        <h3 className="text-center mb-5">
							<a href="https://github.com/Splash-Kid-iOS/splash-kid">
								<span className="">Code Link</span>
							</a>
						</h3>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							Splash Kid is an iPhone game designed to be played in landscape view where the user must
							avoid obstacles and hit targets to achieve a high score! 
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							The most interesting element that I was in charge of was implementing the randomly generated
							world. From a tutorial by Justin Dike of cartoonsmart.com I learned about
							randomly-generated, endless world games. Specifically, I used the idea of a WorldNode nested
							inside of the SKScene that endlessly moves across the screen in increments of the screen’s
							width. Using a counter to keep track of how many times the world node had moved the width of
							the screen (‘worldMovedIncrement’), I was able to randomly generate obstacles and position
							them at x-values that were one screen width to the right of screen. The new obstacles are
							positioned relative to a multiplier of how many times the screen has moved. Using the same
							concept of moving a node across the screen, I was also able to loop the background and
							foreground sprites at different speeds to create a parallax effect. The sky, houses, and
							road are all divided into their own node and move across the screen at different speeds.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> Swift, Xcode, iOS development, SpriteKit
							</li>
							<li>Collision detection</li>
							<li>Sprite Graphics/Animation</li>
							<li>Endless world generation</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
