import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';
import Image_handoff from '../images/handoff_internship.png';
import Image_haven from '../images/haven.png';

import './ProjectPages.css';

export default class BackEndProjects extends Component {
    render() {
        return (
            <div className="BackEndProjects ProjectPage Projects">
                <div className="container">
                    <Jumbotron pageName="All Projects" />
                </div>
                <main>
					<section className="container">
						<div className="row">
							<div className="col-12 col-md-6">
								{
									<CustomCard
                                        image_src={Image_handoff}
										image_alt="handoff"
										title="Handoff"
										description="Spring Web MVC framework"
                                        link="/projects/ComingSoon"
                                        button_text="Explore Project"
									/>
								}
							</div>
							<div className="col">
								{
									<CustomCard
                                        image_src={Image_haven}
										image_alt="haven"
										title="Haven"
										description="backend for users and profiles"
                                        link="/projects/ComingSoon"
                                        button_text="Explore Project"
									/>
								}
							</div>
						</div>	
					</section>
				</main>
				<Footer />
            </div>
        )
    }
}
