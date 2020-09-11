import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className="container">
                    <Jumbotron pageName="Miles Grossenbacher" />
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
