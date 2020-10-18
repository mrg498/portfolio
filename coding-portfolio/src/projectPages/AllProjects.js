import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';
import Image_analogcollective from '../images/analogcollective.png';
import Image_chloeting from '../images/chloe-ting.png';
import Image_handoff from '../images/handoff_internship.png';
import Image_portfolio from '../images/portfolio.png';
import Image_splashkid from '../images/splashkid.png';
import Image_haven from '../images/haven.png';
import Image_westsidetech from '../images/westsidetech.png';
import Image_delayplugin from '../images/delayplugin.png';
import './ProjectPages.css';


export default class AllProjects extends Component {
    render() {
        return (
            <div className="AllProjects ProjectPage Projects">
                <div className="container">
                    <Jumbotron pageName="All Projects" />
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
						<div className="row">
							<div className="col-12 col-md-6">
								{
									<CustomCard
                                        image_src={Image_splashkid}
										image_alt="splash kid"
										title="Splash Kid"
										description="Sprite Kit iOS Game in Swift"
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
                                        image_src={Image_delayplugin}
										image_alt="delay plugin"
										title="Audio Delay Plugin"
										description="real time audio processing"
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
