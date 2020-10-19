import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <ul className='nav-links'>
                    <li className="nav-link"><NavLink activeClassName="active-link" to={process.env.PUBLIC_URL + '/about'}>About Me</NavLink></li>
                    <li className="nav-link"><NavLink activeClassName="active-link" to={process.env.PUBLIC_URL + '/projects'}>Projects</NavLink></li>
                    <li className="nav-link"><NavLink activeClassName="active-link" to={process.env.PUBLIC_URL + '/resume'}>Resume/CV</NavLink></li>      
                </ul> 
            </nav>
        )
    }
}
