import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';
import Image_all_projects from '../images/all_projects.jpg';
import Image_analogcollective from '../images/analogcollective.png';
import Image_backend_projects from '../images/backend_projects.png';
import Image_nonweb_projects from '../images/audio_delay_plugin.png';
import './Projects.css';

export default class Projects extends Component {
	render() {
		return (
			<div className="Projects Page">
				<div className="container">
					<Jumbotron pageName="Projects" />
				</div>
				<main>
					<section className="container">
						<div className="row">
							<div className="col-12 col-md-6">
								{
									<CustomCard
                                        image_src={Image_all_projects}
										image_alt="all projects"
										title="All Projects"
										description="catalog of general programming projects"
                                        link="/projects/all"
                                        button_text="View Projects"
									/>
								}
							</div>
							<div className="col">
								{
									<CustomCard
                                        image_src={Image_analogcollective}
										image_alt="analog collective"
										title="Front End WebDev"
										description="Front End Web Development projects"
                                        link="/projects/frontend"
                                        button_text="View Projects"
									/>
								}
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-6">
								{
									<CustomCard
                                        image_src={Image_backend_projects}
										image_alt="all projects"
										title="Back End WebDev"
										description="Back End Web Development projects"
                                        link="/projects/backend"
                                        button_text="View Projects"
									/>
								}
							</div>
							<div className="col">
								{
									<CustomCard
                                        image_src={Image_nonweb_projects}
										image_alt="non-web related projects"
										title="Non web related"
										description="Other non-web software and coding projects"
                                        link="/projects/nonweb"
                                        button_text="View Projects"
									/>
								}
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
