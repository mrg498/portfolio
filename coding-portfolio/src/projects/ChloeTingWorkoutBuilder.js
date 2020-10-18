import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './Project.css';

export default class ChloeTingWorkoutBuilder extends Component {
    render() {
        return (
            <div className="Project ChloeTingWorkoutBuilder">
                <div className="container">
                    <Jumbotron pageName="Chloe Ting Workout Builder" />
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