import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import "./Projects.css";

export default class Projects extends Component {
    render() {
        return (
            <div className='Projects'>
                <div className="container">
                    <Jumbotron pageName="Projects" />
                </div>   
            </div>
        )
    }
}
