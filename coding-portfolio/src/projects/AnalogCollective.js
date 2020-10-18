import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class AnalogCollective extends Component {
    render() {
        return (
            <div className="Project AnalogCollective">
                <div className="container">
                    <Jumbotron pageName="Analog Collective" />
                </div>
                <main>
					<section className="container">

                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
