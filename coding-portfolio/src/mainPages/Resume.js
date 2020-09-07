import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import './Resume.css';

export default class Resume extends Component {
    render() {
        return (
            <div className='Resume'>
                <div className="container">
                    <Jumbotron pageName="CV & Resume" />
                </div>   
            </div>
        )
    }
}
