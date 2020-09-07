import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className="container">
                    <Jumbotron pageName="Miles Grossenbacher" />
                </div>   
            </div>
        )
    }
}
