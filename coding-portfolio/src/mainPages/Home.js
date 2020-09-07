import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
                <div className="gradient">
                    <div className="container">
                        <Jumbotron pageName="Miles Portfolio"/>
                    </div>
                    
                </div>
			</div>
		);
	}
}
