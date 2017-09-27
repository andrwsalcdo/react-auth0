import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header= () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                React-Auth0
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem href="#">Login</NavItem>
        </Nav>
    </Navbar>
)

export default Header