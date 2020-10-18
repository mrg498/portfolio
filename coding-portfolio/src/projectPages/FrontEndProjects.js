import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';
import Image_analogcollective from '../images/analogcollective.png';
import Image_chloeting from '../images/chloe-ting.png';
import Image_portfolio from '../images/portfolio.png';
import Image_westsidetech from '../images/westsidetech.png';
import './ProjectPages.css';

export default class FrontEndProjects extends Component {
    render() {
        return (
            <div className="FrontEndProjects ProjectPage Projects">
                <div className="container">
                    <Jumbotron pageName="Front End Projects" />
                </div>
                <main>
					<section className="container">
						<div className="row">
							<div className="col-12 col-md-6">
								{
									<CustomCard
                                        image_src={Image_analogcollective}
										image_alt="analog collective"
										title="Analog Collective"
										description="frontend for flask app"
                                        link="/projects/AnalogCollective"
                                        button_text="Explore Project"
									/>
								}
							</div>
							<div className="col">
								{
									<CustomCard
                                        image_src={Image_chloeting}
										image_alt="chloe ting workout builder"
										title="Chloe Ting Workout Builder"
										description="interactions with youtube api"
                                        link="/projects/ChloeTingWorkoutBuilder"
                                        button_text="Explore Project"
									/>
								}
							</div>
						</div>
                        <div className="row">
							<div className="col-12 col-md-6">
								{
									<CustomCard
                                        image_src={Image_westsidetech}
										image_alt="west side tech"
										title="West Side Tech"
										description="Deployed static site with cool animations"
                                        link="/projects/ComingSoon"
                                        button_text="Explore Project"
									/>
								}
							</div>
							<div className="col">
								{
									<CustomCard
                                        image_src={Image_portfolio}
										image_alt="portfolio"
										title="Personal Portfolio"
										description="React App"
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
