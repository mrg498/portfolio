import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
// import Headshot from '../images/headshot.jpeg';
import './About.css';

export default class About extends Component {
	render() {
		return (
			<div className="About Page">
				<div className="container">
					<Jumbotron pageName="Miles Grossenbacher" />
				</div>
				<main>
					<section className="container">
						<p className="page-info__text">
							Welcome to my portfolio! I am a sotware engineer and web developer and a recent graduate of
							NYU with majors in Computer Science and Audio Technology. I've worked extensively in
							Javascript and Java, but I've also completed projects in C++, Python, and Swift. As a full
							stack developer, I am very comfortable with the standard frontend tech stack of HTML, CSS,
							Javascript, and other related technolgies, and I also have experience building projects
							using React. My backend experience includes working professionally in the Spring MVC Java
							framework and building projects in Node.js. Aside from web applications, I've built a
							multitude of other projects in a variety of different langauges from Audio Plugins in C++ to
							iPhone games in Swift. But don't just take my word for it. Check out my projects to see what
							I can do!
						</p>
                        <div className="row justify-content-center">
                            {/* <div className="col-12 col-md-6 image-col">
								<div style={{backgroundImage: `url(${Headshot})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', height: '20vh', padding:'0px'}}>
								</div>
                            </div> */}
                        </div>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
