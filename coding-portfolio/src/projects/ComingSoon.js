import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class ComingSoon extends Component {
    render() {
        return (
            <div className="Project Coming Soon">
                <div className="container jumbo-container">
                    <Jumbotron pageName="Sorry!" />
                </div>
                <main>
					<section className="container jumbo-container">
                        <p className="page-info__text">
                            No description has been written for this project yet. Come back soon!
                        </p>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}