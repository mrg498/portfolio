import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				<Navbar bg="dark" variant="dark" expand="lg">
					<Navbar.Brand as="span">
						Coding Portfolio
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as="span">
								<NavLink exact activeClassName="active-link" className="link" to='/'>Home</NavLink>
							</Nav.Link>
      						<Nav.Link as="span">
								<NavLink exact activeClassName="active-link" className="link" to='/webdev'>Web Development</NavLink>
							</Nav.Link>
							<Nav.Link as="span">
								<NavLink exact activeClassName="active-link" className="link" to='/programming'>General Programming</NavLink>
							</Nav.Link>		
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
