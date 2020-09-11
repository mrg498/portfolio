import React, { Component } from 'react'
import './Footer.css';
import LinkedIn from '../images/LI-In-Bug.png';
import GitHub from '../images/GitHub-Mark-120px-plus.png';
export default class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <h4 className="Footer_text" id="Footer_name">Miles Grossenbacher</h4>
                <h4 className="Footer_text">mrg498@nyu.edu</h4>
                <div className="links-wrapper">
                <a className="media-link" href="https://www.linkedin.com/in/miles-grossenbacher-908b171a3/"><img className="link-image" src={LinkedIn} alt="LinkedIn"></img></a>
                <a className="media-link" href="https://github.com/mrg498"><img className="link-image" src={GitHub} alt="Github"></img></a>
                </div>
            </footer>
        )
    }
}
