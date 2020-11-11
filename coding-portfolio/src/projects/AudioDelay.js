import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class AudioDelay extends Component {
	render() {
		return (
			<div className="Project AudioDelay">
				<div className="container jumbo-container">
					<Jumbotron pageName="Audio Delay Plugin" />
				</div>
				<main>
					<section className="container">
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Demo</span>
						</h3>
						<div className="row">
							<iframe
								title="audio delay demo"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/xuUmudAgZUE"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Description</span>
						</h3>
						<p className="page-info__text project_text">
							An audio delay plugin built in C++ with the JUCE framework
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">Cool Feature</span>
						</h3>
						<p className="page-info__text project_text">
							First, in a “prepareToPlay" method that JUCE provides, I read the incoming sample rate and
							number of channels and store them into member variables of my program. I then created a
							buffer, which I called Delay Buffer, that could hold two seconds worth of samples by using
							the notion that since the sample rate is the number of samples per second, multiplying the
							sample rate by two gives me space for 2 seconds worth of samples. The next step was filling
							my Delay Buffer with the incoming samples from the I/O buffer. This was to be done in the
							JUCE supplied “processAudio” method where the audio processing and computations are meant to
							be carried out. Using JUCE’s AudioBuffer class method, “copyFromWithRamp,” and by keeping
							track of where the start of each block of samples should start in the Delay Buffer, I was
							able to continuously copy the contents of the I/O buffer into the Delay Buffer. The final
							trick to making the Delay Buffer circular was checking if the current I/O block was going to
							overflow the Delay Buffer, and moving the overflow to the beginning of the Delay Buffer if
							needed. By doing this, I both ensured that I had all of the data from the newest block
							stored in my Delay Buffer, and that I was also overwriting samples that were more than 2
							seconds in the past. Once the Delay Buffer was being filled correctly, creating the initial
							echo effect was simple. I simply had to feed my delay signal forward to the current time’s
							block by finding the first sample of my desired delay signal in my Delay Buffer and using it
							as the starting point to add back a block’s worth of old samples to the I/O buffer. The
							moving of samples from the Delay Buffer to the I/O buffer was again made easy by the JUCE
							library’s Audio Buffer class, which provided a method “addFromWithRamp.” Finally, the last
							component of my delay effect’s implementation, the feedback delay effect, proved to be the
							most difficult to comprehend and implement, but through sifting through audio programming
							forums, I found an open-source implementation of a feedback delay effect by ROLI engineer
							Daniel Walz. What I extrapolated from Walz’s algorithm was that the effect comes from
							putting the combined dry signal and feedforward delay back into the delay buffer but
							multiplied by a scaler no greater than 1 to create a decaying feedback loop. Since a single
							sample will be part of many different delay blocks that are fed forward, a build up of
							echoes occurs where each older echo is getting logarithmically scaled down as it is
							repeatedly fed through the loop. After implementing the algorithm into my program and
							getting the decaying feedback working, I decided to test this scaling factor by scaling the
							feedback signal by number slightly greater than 1, and what occurred was a rapid increase in
							amplitude per feedback echo that caused my DAW to crash. In hindsight this may not have been
							the best way to test this, but it made me understand how the scaling factor worked very
							quickly.
						</p>
						<h3 className="text-center text-md-left">
							<span className="project-info__header">What I Learned</span>
						</h3>
						<ul className="page-info__text project_text">
							<li>
								<em>New Tech:</em> JUCE 
							</li>
							<li>Circular buffers</li>
							<li>Block processing</li>
							<li>DSP concepts</li>
						</ul>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
