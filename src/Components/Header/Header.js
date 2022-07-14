import React from 'react';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function Header() {
	// const [dropDown, setDropDown] = useState(false);

	function toggleDropdown() {
		if (this.state.showDropdown) {
			this.setState({ showDropdown: false });
		} else {
			this.setState({ showDropdown: true });
		}
	}

	return (
		<Navbar className='color-nav' expand='lg'>
			<Container id='container'>
				<LinkContainer onClick={() => toggleDropdown()} to='/'>
					<Navbar.Brand className='trakr'>Trakr.</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<LinkContainer onClick={() => toggleDropdown()} to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer onClick={() => toggleDropdown()} to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<NavDropdown
							// onClick={() => toggleDropdown()}
							title='Account'
							id='basic-nav-dropdown'>
							<LinkContainer onClick={() => toggleDropdown()} to='/signup'>
								<NavDropdown.Item>Create Account</NavDropdown.Item>
							</LinkContainer>
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
