import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';

export default class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				<Navbar bg="transparent" variant="dark" expand="lg">
					<Navbar.Brand href="#home">Coding Portfolio</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
