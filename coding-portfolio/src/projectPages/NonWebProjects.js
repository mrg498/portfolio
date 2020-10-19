import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';
import Image_splashkid from '../images/splashkid.png';
import Image_delayplugin from '../images/delayplugin.png';
import './ProjectPages.css';

export default class NonWebProjects extends Component {
    render() {
        return (
            <div className="NonWebProjects ProjectPage Projects">
                <div className="container">
                    <Jumbotron pageName="Non Web" />
                </div>
                <main>
					<section className="container">
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
