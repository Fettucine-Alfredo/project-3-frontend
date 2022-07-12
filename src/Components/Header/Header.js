import React from 'react';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Header() {
	return (
		<Navbar className='color-nav' expand='lg'>
			<Container id='container'>
				<LinkContainer to='/'>
					<Navbar.Brand className='trakr'>Trakr.</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<NavDropdown title='Account' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								Create Account
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Login</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
