import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Footer from '../components/Footer';
import "./Projects.css";

export default class Projects extends Component {
    render() {
        return (
            <div className='Projects'>
                <div className="container">
                    <Jumbotron pageName="Projects" />
                </div>
                <Footer/>   
            </div>
        )
    }
}
